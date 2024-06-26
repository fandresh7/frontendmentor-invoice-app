import { CommonModule } from '@angular/common'
import { Component, Input, inject } from '@angular/core'
import { Status } from '../../models/invoice'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-invoce-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoce-status.component.html'
})
export class InvoceStatusComponent {
  @Input() status: Status = 'pending'

  translateService = inject(TranslateService)

  text() {
    switch (this.status) {
      case 'draft':
        return this.translateService.instant('STATUS.DRAFT')
      case 'pending':
        return this.translateService.instant('STATUS.PENDING')
      case 'paid':
        return this.translateService.instant('STATUS.PAID')
      default:
        return ''
    }
  }

  getStyles() {
    return {
      'text-theme-draft dark:text-theme-light bg-theme-draft/10 dark:bg-theme-light/10': this.status === 'draft',
      'text-theme-pending bg-theme-pending/10': this.status === 'pending',
      'text-theme-paid bg-theme-paid/10': this.status === 'paid'
    }
  }

  getPointStyles() {
    return {
      'bg-theme-draft dark:bg-theme-light': this.status === 'draft',
      'bg-theme-pending': this.status === 'pending',
      'bg-theme-paid': this.status === 'paid'
    }
  }
}
