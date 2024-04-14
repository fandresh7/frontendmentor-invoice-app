import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core'

import { DarkCalendarDirective } from './directives/dark-calendar.directive'
import { Subscription, fromEvent, tap } from 'rxjs'

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DarkCalendarDirective],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('calendar') calendar!: ElementRef

  @Output() sendDate = new EventEmitter()
  subscription!: Subscription

  ngAfterViewInit() {
    const calendarListener$ = fromEvent(this.calendar.nativeElement, 'change').pipe(tap(() => this.emitEvent()))
    this.subscription = calendarListener$.subscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  emitEvent() {
    this.sendDate.emit(this.calendar.nativeElement.value)
  }
}
