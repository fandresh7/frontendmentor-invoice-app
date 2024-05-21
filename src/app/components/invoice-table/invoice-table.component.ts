import { Component, Input } from '@angular/core'
import { CurrencyPipe } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { InvoiceItemComponent } from '../invoice-item/invoice-item.component'
import { Item } from '../../models/invoice'

@Component({
  selector: 'app-invoice-table',
  standalone: true,
  imports: [InvoiceItemComponent, CurrencyPipe, TranslateModule],
  templateUrl: './invoice-table.component.html',
  styleUrl: './invoice-table.component.css'
})
export class InvoiceTableComponent {
  @Input() items: Item[] = []
}
