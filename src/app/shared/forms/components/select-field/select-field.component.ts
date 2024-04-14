import { Component, HostListener } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { ArrowDownIconComponent } from '../../../components/icons.component'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [OverlayModule, ArrowDownIconComponent, ...sharedControlDeps],
  viewProviders: [controlProvider],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css'
})
export class SelectFieldComponent extends BaseControlComponent {
  isOpen = false

  @HostListener('click') open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  setControlValue(value: unknown) {
    this.formControl.setValue(value)
    this.close()
  }
}
