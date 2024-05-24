import { Component, HostListener } from '@angular/core'
import { ArrowDownIconComponent } from '../../shared/components/icons.component'
import { OverlayModule } from '@angular/cdk/overlay'
import { AsyncPipe, NgClass } from '@angular/common'
import { FilterFormComponent } from '../filter-form/filter-form.component'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [OverlayModule, ArrowDownIconComponent, AsyncPipe, NgClass, FilterFormComponent, TranslateModule],
  templateUrl: './filter-dropdown.component.html',
  styleUrl: './filter-dropdown.component.css'
})
export class FilterDropdownComponent {
  isOpen = false

  @HostListener('click') open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }
}
