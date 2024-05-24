import { Pipe, PipeTransform, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { InvoicesService } from '../services/invoices.service'

@Pipe({
  name: 'invoicesAmount',
  standalone: true,
  pure: false
})
export class InvoicesAmountPipe implements PipeTransform {
  translateService = inject(TranslateService)
  invoicesService = inject(InvoicesService)

  transform(value: number): string {
    const status = this.invoicesService.status ?? ''

    if (value === 0) {
      return this.translateService.instant('NO_INVOICES')
    }

    if (value === 1) {
      return this.translateService.instant('ONE_INVOICE', { status })
    }

    return this.translateService.instant('MULTIPLE_INVOICES', { value, status })
  }
}
