import { Component } from '@angular/core'
import { plusIconComponent } from '../../icons.component'
import { BaseButtonComponent } from '../base-button/base-button.component'

@Component({
  selector: 'app-new-button',
  standalone: true,
  imports: [plusIconComponent],
  template: `<button
    [type]="type"
    (click)="click()"
    class="heading-s-variant text-white bg-theme-primary transition-colors duration-300 flex gap-4 items-center rounded-3xl py-2 pl-2 pr-4 hover:bg-theme-primary-accent">
    <div class="bg-white text-theme-primary rounded-full w-8 h-8 flex items-center justify-center">
      <app-plus-icon></app-plus-icon>
    </div>
    <ng-content></ng-content>
  </button> `
})
export class NewButtonComponent extends BaseButtonComponent {}
