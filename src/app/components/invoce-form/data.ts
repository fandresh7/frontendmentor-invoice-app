import { Control } from '../../shared/forms/models/forms.model'

export const billFromControls: Control[] = [
  {
    label: 'Street Address',
    name: 'street-address',
    controlType: 'input',
    type: 'text',
    order: 1,
    validators: {
      required: true,
      minLength: 3
    }
  },
  {
    label: 'City',
    name: 'city',
    controlType: 'input',
    type: 'text',
    order: 2,
    validators: {
      required: true
    }
  },
  {
    label: 'Post Code',
    name: 'post-code',
    controlType: 'input',
    type: 'text',
    order: 1,
    validators: {
      required: true
    }
  },
  {
    label: 'Country',
    name: 'country',
    controlType: 'input',
    type: 'text',
    order: 3,
    validators: {
      required: true
    }
  }
]

export const billToControls: Control[] = [
  {
    label: "Client's Name",
    name: 'client-name',
    controlType: 'input',
    type: 'text',
    order: 1,
    validators: {
      required: true
    }
  },
  {
    label: "Client's Email",
    name: 'client-email',
    controlType: 'input',
    type: 'email',
    order: 2,
    validators: {
      required: true
    }
  },
  {
    label: 'Street Address',
    name: 'client-street-address',
    controlType: 'input',
    type: 'text',
    order: 3,
    validators: {
      required: true
    }
  },
  {
    label: 'City',
    name: 'client-city',
    controlType: 'input',
    type: 'text',
    order: 4,
    validators: {
      required: true
    }
  },
  {
    label: 'Post Code',
    name: 'client-post-code',
    controlType: 'input',
    type: 'text',
    order: 5,
    validators: {
      required: true
    }
  },
  {
    label: 'Country',
    name: 'client-country',
    controlType: 'input',
    type: 'text',
    order: 6,
    validators: {
      required: true
    }
  },
  {
    label: 'Invoce Date',
    name: 'invoce-date',
    controlType: 'calendar',
    order: 7,
    validators: {
      required: true
    }
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
    order: 8,
    validators: {
      required: true
    }
  },
  {
    label: 'Project Description',
    name: 'project-description',
    controlType: 'input',
    type: 'text',
    order: 9,
    validators: {
      required: true
    }
  }
]

export const itemListControls: Control[] = [
  {
    label: '',
    name: 'product-list',
    controlType: 'items',
    controls: [
      {
        label: 'Item Name',
        name: 'name',
        controlType: 'input',
        type: 'text',
        order: 1,
        validators: {
          required: true
        }
      },
      {
        label: 'Qty.',
        name: 'quantity',
        controlType: 'input',
        type: 'number',
        order: 2,
        validators: {
          required: true
        }
      },
      {
        label: 'price',
        name: 'price',
        controlType: 'input',
        type: 'number',
        order: 3,
        validators: {
          required: true
        }
      }
    ],
    order: 1
  }
]
