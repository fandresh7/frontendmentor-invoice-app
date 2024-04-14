import { Component, HostListener } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'

import { CalendarIconComponent } from '../../../components/icons.component'
import { CalendarComponent } from '../../../components/calendar/calendar.component'

@Component({
  selector: 'app-calendar-field',
  standalone: true,
  imports: [OverlayModule, CalendarComponent, CalendarIconComponent],
  templateUrl: './calendar-field.component.html',
  styleUrl: './calendar-field.component.css'
})
export class CalendarFieldComponent {
  isOpen = false

  @HostListener('click') open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  setDate(event: string) {
    console.log(event)
    this.close()
  }
}
