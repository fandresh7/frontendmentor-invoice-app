import { Component } from '@angular/core'
import { BaseButtonComponent } from '../base-button/base-button.component'

@Component({
  selector: 'app-edit-button',
  standalone: true,
  template: `<button
    [type]="type"
    (click)="click()"
    class="heading-s-variant text-theme-blue dark:text-theme-light bg-[#F9FAFE] dark:bg-theme-darker hover:bg-[#DFE3FA] dark:hover:bg-white transition-colors duration-500 rounded-3xl pt-[17px] pb-[15px] px-6">
    <ng-content></ng-content>
  </button>`
})
export class EditButtonComponent extends BaseButtonComponent {}
