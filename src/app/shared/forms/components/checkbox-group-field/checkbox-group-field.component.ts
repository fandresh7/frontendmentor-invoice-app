import { Component } from '@angular/core'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'
import { FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-checkbox-group-field',
  standalone: true,
  imports: [...sharedControlDeps],
  viewProviders: [controlProvider],
  templateUrl: './checkbox-group-field.component.html',
  styleUrl: './checkbox-group-field.component.css'
})
export class CheckboxGroupFieldComponent extends BaseControlComponent {
  override formControl = new FormArray<FormControl>([], this.resolveValidators(this.control.control))

  change(event: Event) {
    const element = event.target as HTMLInputElement
    const value = element.value as never

    const index = this.formControl.value.indexOf(value)
    if (index === -1) {
      const fc = new FormControl(value)
      this.formControl.push(fc)
    } else {
      this.formControl.removeAt(index)
    }
  }
}
