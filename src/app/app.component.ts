import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { DarkModeService } from './shared/darkMode/services/dark-mode.service'
import { DarkModeButtonComponent } from './shared/darkMode/components/button/button.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DarkModeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode()
  }
}
