import { Component, Input } from '@angular/core'
import { ArrowLeftIconComponent } from '../../shared/components/icons.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, ArrowLeftIconComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  @Input({ required: true }) link!: unknown[]
}
