import { Component, OnInit, inject } from '@angular/core'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'
import { FormGroup } from '@angular/forms'
import { ControlResolver } from '../../services/control-resolver/control-resolver.service'
import { ControlInjector } from '../../pipes/control-injector.pipe'

@Component({
  selector: 'app-group-field',
  standalone: true,
  imports: [...sharedControlDeps, ControlInjector],
  viewProviders: [controlProvider],
  templateUrl: './group-field.component.html'
})
export class GroupFieldComponent extends BaseControlComponent implements OnInit {
  controlResolver = inject(ControlResolver)

  override formControl = new FormGroup({})
}
