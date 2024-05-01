import { Component } from '@angular/core'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'

@Component({
  selector: 'app-radio-field',
  standalone: true,
  imports: [...sharedControlDeps],
  viewProviders: [controlProvider],
  templateUrl: './radio-field.component.html',
  styleUrl: './radio-field.component.css'
})
export class RadioFieldComponent extends BaseControlComponent {}
