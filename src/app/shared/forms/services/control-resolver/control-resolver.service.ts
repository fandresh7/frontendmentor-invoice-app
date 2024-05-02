import { Injectable, Type } from '@angular/core'
import { from, of, tap } from 'rxjs'

import { Control } from '../../models/forms.model'
import { FormGroup } from '@angular/forms'

type ControlMap = {
  [T in Control['controlType']]: () => Promise<Type<unknown>>
}

@Injectable({
  providedIn: 'root'
})
export class ControlResolver {
  private lazyControlComponents: ControlMap = {
    input: () => import('../../components/input-field/input-field.component').then(c => c.InputFieldComponent),
    calendar: () => import('../../components/calendar-field/calendar-field.component').then(c => c.CalendarFieldComponent),
    select: () => import('../../components/select-field/select-field.component').then(c => c.SelectFieldComponent),
    items: () => import('../../components/items-field/items-field.component').then(c => c.ItemsFieldComponent),
    group: () => import('../../components/group-field/group-field.component').then(c => c.GroupFieldComponent),
    radio: () => import('../../components/radio-field/radio-field.component').then(c => c.RadioFieldComponent),
    checkbox: () => import('../../components/checkbox-field/checkbox-field.component').then(c => c.CheckboxFieldComponent),
    'checkbox-group': () => import('../../components/checkbox-group-field/checkbox-group-field.component').then(c => c.CheckboxGroupFieldComponent)
  }

  private loadedControlComponents = new Map<string, Type<unknown>>()

  resolve(control: Control, form: FormGroup) {
    const controlType = control.controlType

    const isVisible = this.checkVisible(control, form)
    if (!isVisible) return

    const loadedComponent = this.loadedControlComponents.get(controlType)

    if (loadedComponent) return of(loadedComponent)

    return from(this.lazyControlComponents[controlType]()).pipe(
      tap(component => {
        this.loadedControlComponents.set(controlType, component)
      })
    )
  }

  checkVisible(control: Control, form: FormGroup) {
    if (!control.visible) return true
    return control.visible(form)
  }
}
