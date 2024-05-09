import { Component, Input } from '@angular/core'
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component'
import { Item } from '../../models/invoice'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-invoice-table',
  standalone: true,
  imports: [InvoiceItemComponent, CurrencyPipe],
  templateUrl: './invoice-table.component.html',
  styleUrl: './invoice-table.component.css'
})
export class InvoiceTableComponent {
  @Input() items: Item[] = []
}
