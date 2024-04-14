import { Component } from '@angular/core'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [...sharedControlDeps],
  viewProviders: [controlProvider],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent extends BaseControlComponent {}
