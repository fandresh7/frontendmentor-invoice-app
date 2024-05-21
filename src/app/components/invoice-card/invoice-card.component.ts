import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { CurrencyPipe } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { InvoceStatusComponent } from '../invoce-status/invoce-status.component'
import { ArrowRightIconComponent } from '../../shared/components/icons.component'

import { DatesFormatPipe } from '../../pipes/dates-format.pipe'
import { Invoice } from '../../models/invoice'

@Component({
  selector: 'app-invoice-card',
  standalone: true,
  imports: [InvoceStatusComponent, ArrowRightIconComponent, DatesFormatPipe, CurrencyPipe, RouterLink, TranslateModule],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.css'
})
export class InvoiceCardComponent {
  @Input({ required: true }) invoice!: Invoice
}
