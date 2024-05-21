import { Component } from '@angular/core'
import { DarkModeButtonComponent } from '../../shared/darkMode/components/button/button.component'
import { LangButtonComponent } from '../../shared/language/components/lang-button/lang-button.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DarkModeButtonComponent, LangButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
