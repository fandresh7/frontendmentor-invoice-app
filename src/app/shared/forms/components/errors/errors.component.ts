/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyValue, KeyValuePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, HostBinding, Input, inject } from '@angular/core'
import { ValidationErrors } from '@angular/forms'

import { VALIDATION_ERROR_MESSAGES } from '../../utils/validation-error-messages.token'

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [KeyValuePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (error of errors | keyvalue; track error.key) {
      <div class="text-sm text-accent">{{ getError(error) }}</div>
    }
  `
})
export class ErrorsComponent {
  @Input() errors: ValidationErrors | null | undefined = null

  @HostBinding('class') hostClass = ''

  protected errorsMap = inject(VALIDATION_ERROR_MESSAGES)

  getError(error: KeyValue<string, any>) {
    if (!this.errorsMap[error.key]) {
      console.warn(`missing message for ${error.key}`)
      return
    }

    return this.errorsMap[error.key](error.value)
  }
}
