import { Directive, HostBinding, OnDestroy, OnInit, StaticProvider, inject } from '@angular/core'
import { CONTROL_DATA } from '../../utils/control-data.token'
import { AbstractControl, ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Control } from '../../models/forms.model'
import { CommonModule } from '@angular/common'

export const sharedControlDeps = [CommonModule, ReactiveFormsModule]

export const controlProvider: StaticProvider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true })
}

@Directive()
export class BaseControlComponent implements OnInit, OnDestroy {
  @HostBinding('class') hostClass = 'flex flex-col gap-2'

  control = inject(CONTROL_DATA)

  formControl: AbstractControl = new FormControl(this.control.control.value)

  private parentGroupDir = inject(ControlContainer)

  get parentFormGroup() {
    return this.parentGroupDir.control as FormGroup
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.control.control.name, this.formControl)
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.control.control.name)
  }

  resolveValidators({ validators = {} }: Control) {
    const validatorsKeys = Object.keys(validators) as Array<keyof typeof validators>

    return validatorsKeys.map(key => {
      const value = validators[key]

      if (key === 'required') {
        return Validators.required
      }

      if (key === 'email') {
        return Validators.email
      }

      if (key === 'requiredTrue') {
        return Validators.requiredTrue
      }

      if (key === 'minLength' && typeof value === 'number') {
        return Validators.minLength(value)
      }

      if (key === 'pattern' && typeof value === 'string') {
        return Validators.pattern(value)
      }

      return Validators.nullValidator
    })
  }
}