import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkModeSubject$ = new BehaviorSubject<boolean>(false)
  darkMode$ = this.darkModeSubject$.asObservable()

  get darkMode() {
    return this.darkModeSubject$.getValue()
  }

  set darkMode(value: boolean) {
    localStorage.setItem('theme', value ? 'dark' : 'light')
    this.darkModeSubject$.next(value)
  }

  constructor() {
    this.initDarkMode()
  }

  initDarkMode() {
    const theme = localStorage.getItem('theme')
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    const bodyElement = document.querySelector('body')!

    if (theme === 'dark' || (!theme && prefersDarkMode)) {
      this.darkMode = true
      bodyElement.classList.add('dark')
    } else {
      bodyElement.classList.remove('dark')
      this.darkMode = false
    }
  }

  toggleDarkMode() {
    const bodyElement = document.querySelector('body')!

    bodyElement.classList.toggle('dark')
    if (bodyElement.classList.contains('dark')) {
      this.darkMode = true
    } else {
      this.darkMode = false
    }
  }
}
