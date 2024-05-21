import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { ArrowLeftIconComponent } from '../../shared/components/icons.component'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, ArrowLeftIconComponent, TranslateModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  @Input({ required: true }) link!: unknown[]
}
