import { Component, EventEmitter, Output, inject } from '@angular/core'
import { LanguageService } from '../../language.service'

@Component({
  selector: 'app-lang-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './lang-dropdown.component.html',
  styleUrl: './lang-dropdown.component.css'
})
export class LangDropdownComponent {
  languageService = inject(LanguageService)

  @Output() closeOverlay = new EventEmitter()

  languages = ['en', 'es']

  getImageSrc(code: string) {
    return this.languageService.getImageSrc(code)
  }

  getText(code: string) {
    return this.languageService.getText(code)
  }

  changeLang(code: string) {
    this.languageService.changeLang(code)
    this.closeOverlay.emit()
  }
}
