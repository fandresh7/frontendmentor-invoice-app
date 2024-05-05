import { Component, inject } from '@angular/core'
import { NewButtonComponent } from '../../shared/components/buttons/new-button/new-button.component'
import { InvoiceCardComponent } from '../../components/invoice-card/invoice-card.component'
import { InvoicesService } from '../../services/invoices.service'
import { Observable } from 'rxjs'
import { Invoice } from '../../models/invoice'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [NewButtonComponent, InvoiceCardComponent, AsyncPipe],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  invoicesService = inject(InvoicesService)

  invoices$!: Observable<Invoice[]>

  constructor() {
    this.invoices$ = this.invoicesService.invoices$
  }
}
