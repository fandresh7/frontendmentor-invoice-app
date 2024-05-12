import { Control } from '../../shared/forms/models/forms.model'

export const billFromControls: Control[] = [
  {
    id: 1,
    label: '',
    name: 'senderAddress',
    controlType: 'group',
    order: 1,
    controls: [
      {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    label: '',
    name: 'clientAddress',
    controlType: 'group',
    order: 1,
    controls: [
      {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
    id: 13,
    label: 'Invoce Date',
    name: 'paymentDue',
    controlType: 'calendar',
    order: 7,
    validators: {
      required: true
    }
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
    label: '',
    name: 'items',
    controlType: 'items',
    controls: [
      {
        id: 17,
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
        id: 18,
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
        id: 19,
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
