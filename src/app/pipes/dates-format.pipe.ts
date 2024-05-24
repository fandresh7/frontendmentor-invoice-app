import { Pipe, PipeTransform, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Pipe({
  name: 'datesFormat',
  standalone: true,
  pure: false
})
export class DatesFormatPipe implements PipeTransform {
  translateService = inject(TranslateService)

  transform(value: string): string {
    if (!value) return ''

    const [year, month, day] = value.split('-')
    const monthIndex = parseInt(month) - 1

    const monthKey = `MONTHS.${monthIndex}`
    const monthName = this.translateService.instant(monthKey)

    return `${parseInt(day)} ${monthName} ${year}`
  }
}
