import { Component } from '@angular/core'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'

@Component({
  selector: 'app-checkbox-field',
  standalone: true,
  imports: [...sharedControlDeps],
  viewProviders: [controlProvider],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.css'
})
export class CheckboxFieldComponent extends BaseControlComponent {}
