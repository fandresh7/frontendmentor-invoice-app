import { Injector, Pipe, PipeTransform, inject } from '@angular/core'
import { Control } from '../models/forms.model'
import { CONTROL_DATA } from '../utils/control-data.token'

@Pipe({
  name: 'controlInjector',
  standalone: true
})
export class ControlInjector implements PipeTransform {
  injector = inject(Injector)

  transform(name: string, control: Control): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: CONTROL_DATA,
          useValue: { key: name, control }
        }
      ]
    })
  }
}
