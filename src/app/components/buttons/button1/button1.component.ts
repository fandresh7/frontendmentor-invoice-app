import { Component } from '@angular/core'
import { plusIconComponent } from '../../../shared/components/icons.component'

@Component({
  selector: 'app-button1',
  standalone: true,
  imports: [plusIconComponent],
  templateUrl: './button1.component.html',
  styleUrl: './button1.component.css'
})
export class Button1Component {}
