import { Component } from '@angular/core'
import { DarkModeButtonComponent } from '../../shared/darkMode/components/button/button.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DarkModeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
