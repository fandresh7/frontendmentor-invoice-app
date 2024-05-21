import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

import { BaseButtonComponent } from '../base-button/base-button.component'
import { plusIconComponent } from '../../icons.component'

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [plusIconComponent, TranslateModule],
  template: `<button
    [type]="type"
    class="heading-s-variant text-theme-blue bg-[#F9FAFE] hover:text-theme-blue hover:bg-[#DFE3FA] min-w-full flex justify-center items-center gap-2 mx-auto transition-colors duration-500 rounded-3xl pt-[17px] pb-[15px] px-6 dark:text-theme-grey dark:bg-theme-darker dark:hover:bg-white">
    <div class="w-2 h-2 text-light3 flex justify-center items-center">
      <app-plus-icon></app-plus-icon>
    </div>
    {{ 'FORM.ADD_NEW_ITEM' | translate }}
  </button>`
})
export class AddButtonComponent extends BaseButtonComponent {}
