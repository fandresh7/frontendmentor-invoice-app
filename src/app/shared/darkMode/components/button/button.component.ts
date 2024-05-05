import { Component, inject } from '@angular/core'
import { MoonIconComponent, SunIconComponent } from '../../../components/icons.component'
import { DarkModeService } from '../../services/dark-mode.service'
import { Observable } from 'rxjs'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  imports: [SunIconComponent, MoonIconComponent, AsyncPipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class DarkModeButtonComponent {
  darkModeService = inject(DarkModeService)

  isDarkMode$: Observable<boolean>

  constructor() {
    this.isDarkMode$ = this.darkModeService.darkMode$
  }

  changeDarkMode() {
    this.darkModeService.toggleDarkMode()
  }
}
