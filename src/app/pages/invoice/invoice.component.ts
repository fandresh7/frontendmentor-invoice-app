import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AsyncPipe, CurrencyPipe } from '@angular/common'
import { Observable, switchMap } from 'rxjs'
import { TranslateModule } from '@ngx-translate/core'

import { InvoicesService } from '../../services/invoices.service'

import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component'
import { InvoceStatusComponent } from '../../components/invoce-status/invoce-status.component'
import { EditButtonComponent } from '../../shared/components/buttons/edit-button/edit-button.component'
import { DeleteButtonComponent } from '../../shared/components/buttons/delete-button/delete-button.component'
import { DefaultButtonComponent } from '../../shared/components/buttons/default-button/default-button.component'
import { InvoiceTableComponent } from '../../components/invoice-table/invoice-table.component'
import { EmptyInvoiceComponent } from '../../components/empty-invoice/empty-invoice.component'
import { InvoceFormComponent } from '../../components/invoce-form/invoce-form.component'

import { DatesFormatPipe } from '../../pipes/dates-format.pipe'
import { Invoice } from '../../models/invoice'
import { Dialog } from '@angular/cdk/dialog'
import { DeleteConfirmationModalComponent } from '../../components/delete-confirmation-modal/delete-confirmation-modal.component'

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    InvoceStatusComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DefaultButtonComponent,
    InvoiceTableComponent,
    EmptyInvoiceComponent,
    DatesFormatPipe,
    DatesFormatPipe,
    AsyncPipe,
    CurrencyPipe,
    TranslateModule
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
  route = inject(ActivatedRoute)
  router = inject(Router)

  invoicesService = inject(InvoicesService)

  invoice$!: Observable<Invoice | undefined>

  constructor(public dialog: Dialog) {}

  ngOnInit(): void {
    this.invoice$ = this.route.params.pipe(
      switchMap(params => {
        const id = params['id']

        return this.invoicesService.getInvoice(id)
      })
    )
  }

  edit(invoice: Invoice) {
    this.dialog.open(InvoceFormComponent, {
      data: { invoice }
    })
  }

  delete(invoice: Invoice) {
    this.dialog.open(DeleteConfirmationModalComponent, {
      data: { invoice }
    })
  }

  markAsPaid(invoice: Invoice) {
    this.invoicesService.markAsPaid(invoice.id)
  }
}
