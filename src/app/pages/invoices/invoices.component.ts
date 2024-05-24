import { Component, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { Observable } from 'rxjs'
import { TranslateModule } from '@ngx-translate/core'

import { InvoicesService } from '../../services/invoices.service'
import { Invoice } from '../../models/invoice'

import { NewButtonComponent } from '../../shared/components/buttons/new-button/new-button.component'
import { InvoiceCardComponent } from '../../components/invoice-card/invoice-card.component'
import { EmptyInvoiceComponent } from '../../components/empty-invoice/empty-invoice.component'
import { InvoceFormComponent } from '../../components/invoce-form/invoce-form.component'
import { FilterDropdownComponent } from '../../components/filter-dropdown/filter-dropdown.component'

import { ToggleDialogDirective } from '../../shared/directives/toggle-dialog/toggle-dialog.directive'
import { InvoicesAmountPipe } from '../../pipes/invoices-amount.pipe'

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [NewButtonComponent, InvoiceCardComponent, AsyncPipe, InvoicesAmountPipe, EmptyInvoiceComponent, ToggleDialogDirective, InvoceFormComponent, FilterDropdownComponent, TranslateModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  invoicesService = inject(InvoicesService)

  invoices$!: Observable<Invoice[]>
  InvoceFormComponent = InvoceFormComponent

  constructor() {
    this.invoices$ = this.invoicesService.invoices$
  }
}
