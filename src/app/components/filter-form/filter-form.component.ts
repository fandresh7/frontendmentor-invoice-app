import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { Subscription, tap } from 'rxjs'
import { TranslateModule } from '@ngx-translate/core'

import { InvoicesService } from '../../services/invoices.service'
import { Status } from '../../models/invoice'

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.css'
})
export class FilterFormComponent implements OnInit, OnDestroy {
  invoicesService = inject(InvoicesService)

  subscription!: Subscription

  @Output() closeEmmiter = new EventEmitter<void>()

  form = new FormGroup({
    status: new FormControl('')
  })

  ngOnInit() {
    this.form.controls.status.setValue(this.invoicesService.status ?? 'all')

    this.subscription = this.form.controls.status.valueChanges
      .pipe(
        tap(value => this.setStatus(value as string)),
        tap(() => this.closeEmmiter.emit())
      )
      .subscribe()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  setStatus(value: string) {
    const status = value as Status

    if (value === 'all') {
      this.invoicesService.status = null
    } else {
      this.invoicesService.status = status
    }
  }
}
