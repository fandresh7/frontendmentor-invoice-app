import { Component, Input } from '@angular/core'
import { Item } from '../../models/invoice'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.css'
})
export class InvoiceItemComponent {
  @Input({ required: true }) item!: Item
}
