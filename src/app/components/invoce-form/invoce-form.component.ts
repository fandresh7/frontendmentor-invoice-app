import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, inject } from '@angular/core'
import { NgComponentOutlet, AsyncPipe } from '@angular/common'
import { Router } from '@angular/router'
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { Subject, interval, takeUntil } from 'rxjs'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

import { ControlInjector } from '../../shared/forms/pipes/control-injector.pipe'
import { ControlResolver } from '../../shared/forms/services/control-resolver/control-resolver.service'

import { DefaultButtonComponent } from '../../shared/components/buttons/default-button/default-button.component'
import { SaveButtonComponent } from '../../shared/components/buttons/save-button/save-button.component'
import { EditButtonComponent } from '../../shared/components/buttons/edit-button/edit-button.component'
import { CloseIconComponent } from '../../shared/components/icons.component'

import { InvoicesService } from '../../services/invoices.service'
import { billFromControls, billToControls, itemListControls } from './data'
import { Invoice } from '../../models/invoice'

import { LanguageService } from '../../shared/language/language.service'
import { ERROR_MESSAGES, ERROR_MESSAGES_ES, VALIDATION_ERROR_MESSAGES } from '../../shared/forms/utils/validation-error-messages.token'

const validationMessagesProvider = {
  provide: VALIDATION_ERROR_MESSAGES,
  useFactory: (languageService: LanguageService) => {
    const lang = languageService.code
    return lang === 'en' ? ERROR_MESSAGES : ERROR_MESSAGES_ES
  },
  deps: [LanguageService]
}

@Component({
  selector: 'app-invoce-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgComponentOutlet, ControlInjector, AsyncPipe, DefaultButtonComponent, SaveButtonComponent, EditButtonComponent, TranslateModule, CloseIconComponent],
  providers: [validationMessagesProvider],
  templateUrl: './invoce-form.component.html',
  styleUrl: './invoce-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoceFormComponent {
  @Input() invoiceId: string | null = null

  router = inject(Router)
  invoicesService = inject(InvoicesService)
  translateService = inject(TranslateService)
  cdr = inject(ChangeDetectorRef)

  form = new FormGroup({})

  billsFrom = billFromControls(this.translateService)
  billsTo = billToControls(this.translateService)
  itemList = itemListControls(this.translateService)

  constructor(
    protected controlResolver: ControlResolver,
    protected dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: { invoice: Invoice }
  ) {
    if (this.data && this.data.invoice) {
      const { id, createdAt, status, total, ...invoice } = this.data.invoice

      this.setValuesInForm(invoice as Invoice)
    }
  }

  setValuesInForm(invoice: Invoice) {
    const destroy$ = new Subject<void>()

    interval(50)
      .pipe(takeUntil(destroy$))
      .subscribe(() => {
        if (this.validateIfControlsExist(invoice)) {
          this.setValues(this.form, invoice)

          this.cdr.detectChanges()

          destroy$.next()
          destroy$.complete()
        }
      })
  }

  validateIfControlsExist(invoice: Invoice) {
    const names = Object.keys(invoice)
    const validation = names.every(name => {
      return !!this.form.get(name)
    })

    return validation
  }

  setValues(form: FormGroup, invoice: Partial<Invoice>) {
    Object.keys(invoice).forEach(name => {
      const control = form.get(name)
      const value = invoice[name as keyof Invoice]

      if (typeof value === 'string' || typeof value === 'number') {
        control?.setValue(value.toString())
      }

      if (typeof value === 'object' && !Array.isArray(value)) {
        this.setValues(control as FormGroup, value as Partial<Invoice>)
      }

      if (Array.isArray(value)) {
        const formArray = control as FormArray

        value.forEach(item => {
          const formGroup = new FormGroup({})

          setTimeout(() => {
            this.setValues(formGroup, item)
          })

          formArray.push(formGroup)
        })
      }
    })
  }

  submit() {
    if (this.form.invalid) return

    this.invoicesService.saveInvoice(this.form.value).subscribe(invoice => {
      this.closeDialog()
      this.router.navigate(['invoice', invoice.id])
    })
  }

  edit() {
    if (this.form.invalid) return

    const invoice = { ...this.data.invoice, ...this.form.value } as Invoice

    this.invoicesService.editInvoice(invoice).subscribe(() => {
      this.closeDialog()
    })
  }

  discard() {
    this.closeDialog()
  }

  saveAsDraft() {
    if (this.form.invalid) return

    this.invoicesService.saveAsDraft(this.form.value).subscribe(invoice => {
      this.closeDialog()
      this.router.navigate(['invoice', invoice.id])
    })
  }

  closeDialog() {
    this.form.reset()
    this.dialogRef.close()
  }
}
