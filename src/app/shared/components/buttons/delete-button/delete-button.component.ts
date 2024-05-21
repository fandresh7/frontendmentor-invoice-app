import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

import { BaseButtonComponent } from '../base-button/base-button.component'

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [TranslateModule],
  template: `<button
    [type]="type"
    (click)="click()"
    class="heading-s-variant bg-theme-red text-white hover:bg-theme-light-red transition-colors duration-500 rounded-3xl pt-[17px] pb-[15px] px-6">
    {{ 'BUTTONS.DELETE' | translate }}
  </button>`
})
export class DeleteButtonComponent extends BaseButtonComponent {}
