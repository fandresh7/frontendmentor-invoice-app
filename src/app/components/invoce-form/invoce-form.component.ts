import { NgComponentOutlet, AsyncPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'

import { ControlInjector } from '../../shared/forms/pipes/control-injector.pipe'
import { ControlResolver } from '../../shared/forms/services/control-resolver/control-resolver.service'

import { billFromControls, billToControls, itemListControls } from './data'
import { DefaultButtonComponent } from '../../shared/components/buttons/default-button/default-button.component'
import { SaveButtonComponent } from '../../shared/components/buttons/save-button/save-button.component'
import { EditButtonComponent } from '../../shared/components/buttons/edit-button/edit-button.component'

@Component({
  selector: 'app-invoce-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgComponentOutlet, ControlInjector, AsyncPipe, DefaultButtonComponent, SaveButtonComponent, EditButtonComponent],
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

  submit() {
    console.log(this.form.value)
    console.log(this.form.valid)
    if (this.form.invalid) return
  }

  discard() {
    console.log('discard')
  }

  saveAsDraft() {
    console.log('save as draft')
  }
}
