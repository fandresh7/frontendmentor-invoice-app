import { Component } from '@angular/core'
import { BaseButtonComponent } from '../base-button/base-button.component'

@Component({
  selector: 'app-save-button',
  standalone: true,
  template: `<button
    [type]="type"
    (click)="click()"
    class="heading-s-variant text-theme-grey bg-theme-slate dark:text-theme-light hover:bg-theme-black dark:hover:bg-theme-dark transition-colors duration-500 rounded-3xl pt-[17px] pb-[15px] px-6">
    Save as Draft
  </button>`
})
export class SaveButtonComponent extends BaseButtonComponent {}
