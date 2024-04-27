import { Injectable, Type } from '@angular/core'
import { Control } from '../../models/forms.model'
import { from, of, tap } from 'rxjs'

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
    group: () => import('../../components/group-field/group-field.component').then(c => c.GroupFieldComponent)
  }

  private loadedControlComponents = new Map<string, Type<unknown>>()

  resolve(controlType: keyof ControlMap) {
    const loadedComponent = this.loadedControlComponents.get(controlType)

    if (loadedComponent) return of(loadedComponent)

    return from(this.lazyControlComponents[controlType]()).pipe(
      tap(component => {
        this.loadedControlComponents.set(controlType, component)
      })
    )
  }
}
