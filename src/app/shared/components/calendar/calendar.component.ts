import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild, inject } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { Observable, Subscription, fromEvent, tap } from 'rxjs'

import { DarkCalendarDirective } from './directives/dark-calendar.directive'
import { LanguageService } from '../../language/language.service'

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DarkCalendarDirective, AsyncPipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarComponent implements AfterViewInit, OnDestroy {
  languageService = inject(LanguageService)

  @ViewChild('calendar') calendar!: ElementRef

  @Output() sendDate = new EventEmitter()
  subscription!: Subscription

  code$!: Observable<string>

  constructor() {
    this.code$ = this.languageService.code$
  }

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
