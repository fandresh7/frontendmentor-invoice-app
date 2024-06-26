import { Directive, HostBinding, OnDestroy, OnInit, StaticProvider, inject } from '@angular/core'
import { AbstractControl, ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AsyncPipe, CommonModule } from '@angular/common'
import { of } from 'rxjs'

import { CONTROL_DATA } from '../../utils/control-data.token'
import { Control } from '../../models/forms.model'

import { ValidatorMessageDirective } from '../../directives/validator-message/validator-message.directive'
import { HelpTextDirective } from '../../directives/helpText/help-text.directive'
import { ValidatorArrayMessageDirective } from '../../directives/validator-array-message/validator-array-message.directive'

export const sharedControlDeps = [CommonModule, ReactiveFormsModule, ValidatorMessageDirective, HelpTextDirective, ValidatorArrayMessageDirective, AsyncPipe]

export const controlProvider: StaticProvider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true })
}

@Directive()
export class BaseControlComponent implements OnInit, OnDestroy {
  @HostBinding('class') hostClass = ''

  control = inject(CONTROL_DATA)

  formControl: AbstractControl = new FormControl(this.control.control.value, this.resolveValidators(this.control.control))
  id = this.control.control.name + this.control.control.id + (this.control.index ?? '')

  private parentGroupDir = inject(ControlContainer)

  get parentFormGroup() {
    return this.parentGroupDir.control as FormGroup
  }

  ngOnInit() {
    this.initialize()
  }

  ngOnDestroy() {
    this.destroy()
  }

  initialize() {
    if (this.control.formGroup) {
      this.control.formGroup.addControl(this.control.control.name, this.formControl)
    } else {
      this.parentFormGroup.addControl(this.control.control.name, this.formControl)
    }

    this.hostClass = `field wrapper-${this.control.control.name}`
  }

  destroy() {
    if (this.control.formGroup) return
    else this.parentFormGroup.removeControl(this.control.control.name)
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

  getOptions() {
    if (this.control.control.options) {
      return of(this.control.control.options)
    }

    if (!this.control.control.asyncOptions) return of([])

    return this.control.control.asyncOptions(this.parentFormGroup)
  }
}
