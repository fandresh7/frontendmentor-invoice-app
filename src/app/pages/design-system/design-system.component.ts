import { Component } from '@angular/core'
import { NewButtonComponent } from '../../shared/components/buttons/new-button/new-button.component'
import { DefaultButtonComponent } from '../../shared/components/buttons/default-button/default-button.component'
import { EditButtonComponent } from '../../shared/components/buttons/edit-button/edit-button.component'
import { SaveButtonComponent } from '../../shared/components/buttons/save-button/save-button.component'
import { DeleteButtonComponent } from '../../shared/components/buttons/delete-button/delete-button.component'
import { AddButtonComponent } from '../../shared/components/buttons/add-button/add-button.component'

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [NewButtonComponent, DefaultButtonComponent, EditButtonComponent, SaveButtonComponent, DeleteButtonComponent, AddButtonComponent],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.css'
})
export class DesignSystemComponent {}
