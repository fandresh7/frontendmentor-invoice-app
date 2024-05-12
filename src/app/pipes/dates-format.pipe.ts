import { Pipe, PipeTransform } from '@angular/core'
import { months } from '../utils/invoices'

@Pipe({
  name: 'datesFormat',
  standalone: true
})
export class DatesFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''

    const [year, month, day] = value.split('-')
    const monthIndex = parseInt(month) - 1
    const monthName = months[monthIndex]

    return `${parseInt(day)} ${monthName} ${year}`
  }
}
