import { Injector, Pipe, PipeTransform, inject } from '@angular/core'
import { Control } from '../models/forms.model'
import { CONTROL_DATA } from '../utils/control-data.token'
import { FormGroup } from '@angular/forms'

@Pipe({
  name: 'controlInjector',
  standalone: true
})
export class ControlInjector implements PipeTransform {
  injector = inject(Injector)

  transform(name: string, control: Control, formGroup?: FormGroup, index?: number): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: CONTROL_DATA,
          useValue: { key: name, control, formGroup, index }
        }
      ]
    })
  }
}
