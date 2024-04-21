import { NgComponentOutlet, AsyncPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Button2Component } from '../../shared/components/buttons/button2/button2.component'
import { ControlInjector } from '../../shared/forms/pipes/control-injector.pipe'
import { ControlResolver } from '../../shared/forms/services/control-resolver/control-resolver.service'
import { billFromControls, billToControls } from './data'
import { Button3Component } from '../../shared/components/buttons/button3/button3.component'

@Component({
  selector: 'app-invoce-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgComponentOutlet, ControlInjector, AsyncPipe, Button2Component, Button3Component],
  templateUrl: './invoce-form.component.html',
  styleUrl: './invoce-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoceFormComponent {
  form = new FormGroup({})

  billsFrom = billFromControls
  billsTo = billToControls

  @Output() submittedFormEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  constructor(protected controlResolver: ControlResolver) {}

  submit(form: FormGroup) {
    console.log(form.value)
    if (form.invalid) return
    this.submittedFormEvent.emit(form)
  }
}
