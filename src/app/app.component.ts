import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  translateService = inject(TranslateService)

  constructor() {
    const lang = navigator.language || 'en'
    const code = lang.split('-')[0]

    this.translateService.setDefaultLang(code)
    this.translateService.use(code)
  }
}
