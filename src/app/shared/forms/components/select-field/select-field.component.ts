import { Component, HostListener, OnInit } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { ArrowDownIconComponent } from '../../../components/icons.component'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'
import { Option } from '../../models/forms.model'

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [...sharedControlDeps, OverlayModule, ArrowDownIconComponent],
  viewProviders: [controlProvider],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css'
})
export class SelectFieldComponent extends BaseControlComponent implements OnInit {
  isOpen = false

  override ngOnInit() {
    this.initialize()

    this.control.control.options?.forEach(option => {
      if (option.selected) {
        this.setControlValue(option)
      }
    })
  }

  @HostListener('click') open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  setControlValue(option: Option) {
    this.formControl.setValue(option.value)
    this.close()
  }

  getOptionLabel(value: unknown) {
    const option = this.control.control.options?.find(option => {
      return option.value === value
    })

    return option?.label ?? ''
  }
}
