import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-empty-invoice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './empty-invoice.component.html',
  styleUrl: './empty-invoice.component.css'
})
export class EmptyInvoiceComponent {}
