import { Component, inject } from '@angular/core'
import { FormArray, FormGroup } from '@angular/forms'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'
import { ControlResolver } from '../../services/control-resolver/control-resolver.service'
import { ControlInjector } from '../../pipes/control-injector.pipe'

@Component({
  selector: 'app-items-field',
  standalone: true,
  imports: [...sharedControlDeps, ControlInjector],
  viewProviders: [controlProvider],
  templateUrl: './items-field.component.html'
})
export class ItemsFieldComponent extends BaseControlComponent {
  controlResolver = inject(ControlResolver)

  override formControl = new FormArray<FormGroup>([])

  addGroup() {
    const formGroup = new FormGroup({})

    this.formControl.insert(0, formGroup)
  }

  removeGroup(index: number) {
    this.formControl.removeAt(index)
  }
}
