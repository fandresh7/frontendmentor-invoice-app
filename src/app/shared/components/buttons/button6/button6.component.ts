import { Component } from '@angular/core'
import { plusIconComponent } from '../../icons.component'

@Component({
  selector: 'app-button6',
  standalone: true,
  imports: [plusIconComponent],
  template: `<button class="heading-s flex justify-center items-center gap-2 w-72 bg-lightBg text-light3 hover:bg-light1 transition-colors duration-500 rounded-3xl pt-[17px] pb-[15px] px-6">
    <div class="w-2 h-2 text-light3 flex justify-center items-center">
      <app-plus-icon></app-plus-icon>
    </div>
    Add New Item
  </button> `
})
export class Button6Component {}
