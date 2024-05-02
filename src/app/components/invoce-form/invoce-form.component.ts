import { NgComponentOutlet, AsyncPipe, JsonPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Button2Component } from '../../shared/components/buttons/button2/button2.component'
import { ControlInjector } from '../../shared/forms/pipes/control-injector.pipe'
import { ControlResolver } from '../../shared/forms/services/control-resolver/control-resolver.service'
import { billFromControls, billToControls, itemListControls } from './data'
import { Button3Component } from '../../shared/components/buttons/button3/button3.component'

@Component({
  selector: 'app-invoce-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgComponentOutlet, ControlInjector, AsyncPipe, Button2Component, Button3Component, JsonPipe],
  templateUrl: './invoce-form.component.html',
  styleUrl: './invoce-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoceFormComponent {
  form = new FormGroup({})

  billsFrom = billFromControls
  billsTo = billToControls
  itemList = itemListControls

  constructor(protected controlResolver: ControlResolver) {}

  submit(form: FormGroup) {
    console.log(form.value)
    console.log(form.valid)
    if (form.invalid) return
  }
}
