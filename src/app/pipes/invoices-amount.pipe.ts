import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'invoicesAmount',
  standalone: true
})
export class InvoicesAmountPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return 'No Invoices'
    }

    if (value === 1) {
      return `There is 1 total invoice`
    }

    return `There are ${value} total invoices`
  }
}
