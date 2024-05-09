import { Component } from '@angular/core'
import { ArrowLeftIconComponent } from '../../shared/components/icons.component'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [ArrowLeftIconComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {}
