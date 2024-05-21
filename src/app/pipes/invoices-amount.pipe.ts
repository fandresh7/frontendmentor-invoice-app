import { Pipe, PipeTransform, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Pipe({
  name: 'invoicesAmount',
  standalone: true
})
export class InvoicesAmountPipe implements PipeTransform {
  translateService = inject(TranslateService)

  transform(value: number): string {
    if (value === 0) {
      return this.translateService.instant('NO_INVOICES')
    }

    if (value === 1) {
      return this.translateService.instant('ONE_INVOICE')
    }

    return this.translateService.instant('MULTIPLE_INVOICES', { value })
  }
}
