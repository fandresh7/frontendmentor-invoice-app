import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core'
import { Subscription, delay, tap } from 'rxjs'

import { DarkModeService } from '../../../darkMode/services/dark-mode.service'

@Directive({
  selector: '[appDarkCalendar]',
  standalone: true
})
export class DarkCalendarDirective implements AfterViewInit, OnDestroy {
  calendar = inject(ElementRef)
  darkModeService = inject(DarkModeService)

  darkModeSubscription!: Subscription

  ngAfterViewInit(): void {
    const darkMode$ = this.darkModeService.darkMode$.pipe(
      delay(0),
      tap(isDarkMode => {
        this.calendarDarkMode(isDarkMode)
      })
    )

    this.darkModeSubscription = darkMode$.subscribe()
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe()
  }

  // support for dark mode due to calendar-date don't have support
  calendarDarkMode(isDarkMode: boolean) {
    const calendar = this.calendar.nativeElement
    if (!calendar) return

    const container = calendar.shadowRoot.querySelector('[part="container"]')
    if (!container) return

    if (isDarkMode) {
      container.style.color = 'white'
      container.style.background = '#252945'
    } else {
      container.style.color = 'black'
      container.style.background = 'white'
    }
  }
}
