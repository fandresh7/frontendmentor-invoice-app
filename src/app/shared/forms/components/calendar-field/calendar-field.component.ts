import { Component, HostListener } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'

import { CalendarIconComponent } from '../../../components/icons.component'
import { CalendarComponent } from '../../../components/calendar/calendar.component'
import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'

@Component({
  selector: 'app-calendar-field',
  standalone: true,
  imports: [OverlayModule, CalendarComponent, CalendarIconComponent, ...sharedControlDeps],
  viewProviders: [controlProvider],
  templateUrl: './calendar-field.component.html',
  styleUrl: './calendar-field.component.css'
})
export class CalendarFieldComponent extends BaseControlComponent {
  isOpen = false

  @HostListener('click') open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  setDate(event: string) {
    this.formControl.setValue(event)
    this.close()
  }
}
