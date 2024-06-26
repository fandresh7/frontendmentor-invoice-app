import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-help-text',
  standalone: true,
  imports: [],
  template: '<p class="text-sm">{{ message }}</p>'
})
export class HelpTextComponent {
  @Input() message = ''
}
