import { Component, inject } from '@angular/core'
import { FormArray, FormGroup } from '@angular/forms'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'
import { ControlResolver } from '../../services/control-resolver/control-resolver.service'
import { ControlInjector } from '../../pipes/control-injector.pipe'
import { DeleteIconComponent } from '../../../components/icons.component'

@Component({
  selector: 'app-items-field',
  standalone: true,
  imports: [...sharedControlDeps, ControlInjector, DeleteIconComponent],
  viewProviders: [controlProvider],
  templateUrl: './items-field.component.html'
})
export class ItemsFieldComponent extends BaseControlComponent {
  controlResolver = inject(ControlResolver)

  override formControl = new FormArray<FormGroup>([])

  addGroup() {
    const formGroup = new FormGroup({})
    this.formControl.push(formGroup)
  }

  removeGroup(index: number) {
    this.formControl.removeAt(index)
  }

  get formControls() {
    return (this.formControl as FormArray).controls
  }
}
