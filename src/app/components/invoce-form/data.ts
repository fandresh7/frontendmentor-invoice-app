import { Control } from '../../shared/forms/models/forms.model'

export const billFromControls: Control[] = [
  {
    label: 'Street Address',
    name: 'street-address',
    controlType: 'input',
    type: 'text',
    order: 1
  },
  {
    label: 'City',
    name: 'city',
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
  }
]

export const billToControls: Control[] = [
  {
    label: "Client's Name",
    name: 'client-name',
    controlType: 'input',
    type: 'text',
    order: 1
  },
  {
    label: "Client's Email",
    name: 'client-email',
    controlType: 'input',
    type: 'email',
    order: 2
  },
  {
    label: 'Street Address',
    name: 'client-street-address',
    controlType: 'input',
    type: 'text',
    order: 3
  },
  {
    label: 'City',
    name: 'client-city',
    controlType: 'input',
    type: 'text',
    order: 4
  },
  {
    label: 'Post Code',
    name: 'client-post-code',
    controlType: 'input',
    type: 'text',
    order: 5
  },
  {
    label: 'Country',
    name: 'client-country',
    controlType: 'input',
    type: 'text',
    order: 6
  },
  {
    label: 'Invoce Date',
    name: 'invoce-date',
    controlType: 'calendar',
    order: 7
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
    order: 8
  },
  {
    label: 'Project Description',
    name: 'project-description',
    controlType: 'input',
    type: 'text',
    order: 9
  }
]

export const itemListControls: Control[] = []