import { Injectable, inject } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { TranslateService } from '@ngx-translate/core'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  translateService = inject(TranslateService)

  codeSubject$ = new BehaviorSubject<string>('')
  code$ = this.codeSubject$.asObservable()

  get code() {
    return this.codeSubject$.getValue()
  }

  set code(code: string) {
    this.codeSubject$.next(code)
  }

  constructor() {
    this.initLang()
  }

  initLang() {
    const lang = this.getBrowserLanguage()
    const code = lang.split('-')[0]

    this.translateService.setDefaultLang(code)
    this.translateService.use(code)
    this.code = code
  }

  changeLang(code: string) {
    this.translateService.use(code)
    this.code = code
  }

  getImageSrc(code: string) {
    return `/assets/flags/${code}.svg`
  }

  getText(code: string) {
    return this.translateService.instant(`LANG.${code}`)
  }

  private getBrowserLanguage() {
    return navigator.language || 'en'
  }
}
