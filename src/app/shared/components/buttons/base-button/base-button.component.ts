import { Directive, EventEmitter, Input, Output } from '@angular/core'

@Directive()
export class BaseButtonComponent {
  @Input() type: 'submit' | 'button' = 'button'

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>()

  click() {
    this.clicked.emit()
  }
}
