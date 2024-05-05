import { Component } from '@angular/core'
import { BaseButtonComponent } from '../base-button/base-button.component'

@Component({
  selector: 'app-delete-button',
  standalone: true,
  template: `<button
    [type]="type"
    (click)="click()"
    class="heading-s-variant bg-theme-red text-white hover:bg-theme-light-red transition-colors duration-500 rounded-3xl pt-[17px] pb-[15px] px-6">
    Delete
  </button>`
})
export class DeleteButtonComponent extends BaseButtonComponent {}
