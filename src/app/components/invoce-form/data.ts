import { Control } from '../../shared/forms/models/forms.model'

export const billFromControls: Control[] = [
  {
    label: '',
    name: 'senderAddress',
    controlType: 'group',
    order: 1,
    controls: [
      {
        label: 'Street Address',
        name: 'street',
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
          required: true,
          minLength: 3
        }
      },
      {
        label: 'Post Code',
        name: 'postCode',
        controlType: 'input',
        type: 'text',
        order: 3,
        validators: {
          required: true,
          min: 0
        }
      },
      {
        label: 'Country',
        name: 'country',
        controlType: 'input',
        type: 'text',
        order: 4,
        validators: {
          required: true,
          minLength: 3
        }
      }
    ]
  }
]

export const billToControls: Control[] = [
  {
    label: "Client's Name",
    name: 'clientName',
    controlType: 'input',
    type: 'text',
    order: 1,
    validators: {
      required: true,
      minLength: 4
    }
  },
  {
    label: "Client's Email",
    name: 'clientEmail',
    controlType: 'input',
    type: 'email',
    order: 2,
    validators: {
      required: true,
      email: true
    }
  },
  {
    label: '',
    name: 'clientAddress',
    controlType: 'group',
    order: 1,
    controls: [
      {
        label: 'Street Address',
        name: 'street',
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
          required: true,
          minLength: 3
        }
      },
      {
        label: 'Post Code',
        name: 'postCode',
        controlType: 'input',
        type: 'text',
        order: 3,
        validators: {
          required: true,
          minLength: 3
        }
      },
      {
        label: 'Country',
        name: 'country',
        controlType: 'input',
        type: 'text',
        order: 4,
        validators: {
          required: true,
          minLength: 3
        }
      }
    ]
  },
  {
    label: 'Invoce Date',
    name: 'paymentDue',
    controlType: 'calendar',
    order: 7,
    validators: {
      required: true
    }
  },
  {
    label: 'Payment Terms',
    name: 'paymentTerms',
    controlType: 'select',
    options: [
      { label: 'Net 1 Day', value: '1' },
      { label: 'Net 7 Days', value: '7' },
      { label: 'Net 14 Days', value: '14' },
      { label: 'Net 30 Days', value: '30' }
    ],
    order: 8,
    validators: {
      required: true
    }
  },
  {
    label: 'Project Description',
    name: 'description',
    controlType: 'input',
    type: 'text',
    order: 9,
    validators: {
      required: true,
      minLength: 10
    }
  }
]

export const itemListControls: Control[] = [
  {
    label: '',
    name: 'items',
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
          required: true,
          min: 0
        }
      },
      {
        label: 'price',
        name: 'price',
        controlType: 'input',
        type: 'number',
        order: 3,
        validators: {
          required: true,
          min: 0
        }
      }
    ],
    order: 1
  }
]
