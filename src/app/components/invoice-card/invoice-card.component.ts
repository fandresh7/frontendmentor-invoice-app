import { Component } from '@angular/core'
import { InvoceStatusComponent } from '../invoce-status/invoce-status.component'
import { ArrowRightIconComponent } from '../../shared/components/icons.component'

@Component({
  selector: 'app-invoice-card',
  standalone: true,
  imports: [InvoceStatusComponent, ArrowRightIconComponent],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.css'
})
export class InvoiceCardComponent {}
