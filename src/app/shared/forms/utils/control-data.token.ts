import { InjectionToken } from '@angular/core'
import { Control } from '../models/forms.model'
import { FormGroup } from '@angular/forms'

export interface ControlData {
  control: Control
  formGroup?: FormGroup
  index?: number
}

export const CONTROL_DATA = new InjectionToken<ControlData>('Control Data')
