import { Component } from '@angular/core'
import { BaseButtonComponent } from '../base-button/base-button.component'

@Component({
  selector: 'app-default-button',
  standalone: true,
  template: `<button
    (click)="click()"
    [type]="type"
    class="heading-s-variant text-white bg-theme-primary transition-colors duration-300 rounded-3xl pt-[17px] pb-[15px] px-6 hover:bg-theme-primary-accent">
    <ng-content></ng-content>
  </button>`
})
export class DefaultButtonComponent extends BaseButtonComponent {}
