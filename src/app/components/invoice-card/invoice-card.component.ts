import { Component, Input } from '@angular/core'
import { InvoceStatusComponent } from '../invoce-status/invoce-status.component'
import { ArrowRightIconComponent } from '../../shared/components/icons.component'
import { Invoice } from '../../models/invoice'
import { DatesFormatPipe } from '../../pipes/dates-format.pipe'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-invoice-card',
  standalone: true,
  imports: [InvoceStatusComponent, ArrowRightIconComponent, DatesFormatPipe, CurrencyPipe],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.css'
})
export class InvoiceCardComponent {
  @Input({ required: true }) invoice!: Invoice
}
