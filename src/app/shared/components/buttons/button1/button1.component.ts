import { Component, Input } from '@angular/core'
import { plusIconComponent } from '../../icons.component'

@Component({
  selector: 'app-button1',
  standalone: true,
  imports: [plusIconComponent],
  template: `<button
    [type]="type"
    class="heading-s bg-primary hover:bg-secondary transition-colors duration-300 text-white flex gap-4 items-center rounded-3xl py-2 pl-2 pr-4">
    <div class="bg-white text-primary hover:text-secondary rounded-full w-8 h-8 flex items-center justify-center">
      <app-plus-icon></app-plus-icon>
    </div>
    <ng-content></ng-content>
  </button> `
})
export class Button1Component {
  @Input() type: 'submit' | 'button' = 'button'
}
