import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button2',
  standalone: true,
  template: `<button
    [type]="type"
    class="heading-s bg-primary hover:bg-secondary transition-colors duration-300 text-white rounded-3xl pt-[17px] pb-[15px] px-6">
    <ng-content></ng-content>
  </button>`
})
export class Button2Component {
  @Input() type: 'submit' | 'button' = 'button'
}
