import { Component, HostListener } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { ArrowDownIconComponent } from '../../../components/icons.component'

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [OverlayModule, ArrowDownIconComponent],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css'
})
export class SelectFieldComponent {
  isOpen = false

  data = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']

  @HostListener('click') open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }
}
