import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { DarkModeService } from './shared/darkMode/services/dark-mode.service'
import { Button2Component } from './components/buttons/button2/button2.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Button2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode()
  }
}
