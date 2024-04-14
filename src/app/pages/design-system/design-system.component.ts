import { Component } from '@angular/core'
import { FormComponent } from '../../shared/forms/form.component'
import { Control } from '../../shared/forms/models/forms.model'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.css'
})
export class DesignSystemComponent {
  form: FormGroup = new FormGroup({})

  controls: Control[] = [
    {
      label: 'Street Address',
      name: 'street-address',
      controlType: 'input',
      type: 'text',
      order: 1
    },
    {
      label: 'City',
      name: 'ciry',
      controlType: 'input',
      type: 'text',
      order: 2
    },
    {
      label: 'Post Code',
      name: 'post-code',
      controlType: 'input',
      type: 'text',
      order: 1
    },
    {
      label: 'Country',
      name: 'country',
      controlType: 'input',
      type: 'text',
      order: 3
    },
    {
      label: 'Invoice Date',
      name: 'invoce-date',
      controlType: 'calendar',
      order: 4,
      disabled: true
    },
    {
      label: 'Payment Terms',
      name: 'payment-terms',
      controlType: 'select',
      options: [
        { label: 'Net 1 Day', value: 'next-1-day' },
        { label: 'Net 7 Days', value: 'next-7-day' },
        { label: 'Net 14 Days', value: 'next-14-day' },
        { label: 'Net 30 Days', value: 'next-30-day' }
      ],
      order: 5,
      disabled: true
    }
  ]
}
