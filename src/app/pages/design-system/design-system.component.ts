import { Component } from '@angular/core'
import { InvoceFormComponent } from '../../components/invoce-form/invoce-form.component'

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [InvoceFormComponent],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.css'
})
export class DesignSystemComponent {}
