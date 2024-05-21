import { Component, HostListener, inject } from '@angular/core'
import { LanguageService } from '../../language.service'
import { Observable } from 'rxjs'
import { AsyncPipe } from '@angular/common'
import { OverlayModule } from '@angular/cdk/overlay'
import { LangDropdownComponent } from '../lang-dropdown/lang-dropdown.component'

@Component({
  selector: 'app-lang-button',
  standalone: true,
  imports: [OverlayModule, AsyncPipe, LangDropdownComponent],
  templateUrl: './lang-button.component.html',
  styleUrl: './lang-button.component.css'
})
export class LangButtonComponent {
  languageService = inject(LanguageService)

  code$!: Observable<string>

  isOpen = false

  @HostListener('click') open() {
    this.isOpen = true
  }

  constructor() {
    this.code$ = this.languageService.code$
  }

  getImageSrc(code: string) {
    return this.languageService.getImageSrc(code)
  }

  getText(code: string) {
    return this.languageService.getText(code)
  }

  close() {
    this.isOpen = false
  }
}
