import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Control } from './models/forms.model'
import { ControlResolver } from './services/control-resolver/control-resolver.service'
import { AsyncPipe, NgComponentOutlet } from '@angular/common'
import { ControlInjector } from './pipes/control-injector.pipe'
import { Button2Component } from '../components/buttons/button2/button2.component'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgComponentOutlet, ControlInjector, AsyncPipe, Button2Component],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Input({ required: true }) form!: FormGroup
  @Input({ required: true }) controls!: Control[]

  @Output() submittedFormEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  constructor(protected controlResolver: ControlResolver) {}

  submit(form: FormGroup) {
    console.log(form.value)
    if (form.invalid) return
    this.submittedFormEvent.emit(form)
  }
}
