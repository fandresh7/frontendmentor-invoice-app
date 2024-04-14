import { InjectionToken } from '@angular/core'
import { Control } from '../models/forms.model'

export interface ControlData {
  control: Control
}

export const CONTROL_DATA = new InjectionToken<ControlData>('Control Data')
