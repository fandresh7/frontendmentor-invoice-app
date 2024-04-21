import { Component } from '@angular/core'

@Component({
  selector: 'app-button3',
  standalone: true,
  template: `<button
    type="button"
    class="heading-s bg-lightBg text-light3 dark:bg-dark1 dark:text-light1 hover:text-light3 hover:bg-light1 dark:hover:bg-white dark:hover:text-light1 transition-colors duration-500 rounded-3xl pt-[17px] pb-[15px] px-6">
    <ng-content></ng-content>
  </button> `
})
export class Button3Component {}
