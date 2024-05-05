import { Component } from '@angular/core'
import { NewButtonComponent } from '../../shared/components/buttons/new-button/new-button.component'
import { InvoiceCardComponent } from '../../components/invoice-card/invoice-card.component'

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [NewButtonComponent, InvoiceCardComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {}
