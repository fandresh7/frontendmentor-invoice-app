import { TranslateService } from '@ngx-translate/core'
import { Control } from '../../shared/forms/models/forms.model'

export const billFromControls = (translate: TranslateService): Control[] => [
  {
    id: 1,
    label: '',
    name: 'senderAddress',
    controlType: 'group',
    order: 1,
    controls: [
      {
        id: 2,
        label: translate.instant('FORM.STREET_ADDRESS'),
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
        label: translate.instant('FORM.CITY'),
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
        label: translate.instant('FORM.POST_CODE'),
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
        label: translate.instant('FORM.COUNTRY'),
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

export const billToControls = (translate: TranslateService): Control[] => [
  {
    id: 6,
    label: translate.instant('FORM.CLIENT_NAME'),
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
    label: translate.instant('FORM.CLIENT_EMAIL'),
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
        label: translate.instant('FORM.STREET_ADDRESS'),
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
        label: translate.instant('FORM.CITY'),
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
        label: translate.instant('FORM.POST_CODE'),
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
        label: translate.instant('FORM.COUNTRY'),
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
    label: translate.instant('FORM.INVOICE_DATE'),
    name: 'paymentDue',
    controlType: 'calendar',
    order: 7,
    validators: {
      required: true
    }
  },
  {
    id: 14,
    label: translate.instant('FORM.PAYMENT_TERMS'),
    name: 'paymentTerms',
    controlType: 'select',
    options: [
      { label: translate.instant('FORM.NET.1'), value: '1' },
      { label: translate.instant('FORM.NET.7'), value: '7' },
      { label: translate.instant('FORM.NET.14'), value: '14' },
      { label: translate.instant('FORM.NET.30'), value: '30' }
    ],
    order: 8,
    validators: {
      required: true
    }
  },
  {
    id: 15,
    label: translate.instant('FORM.PROJECT_DESCRIPTION'),
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

export const itemListControls = (translate: TranslateService): Control[] => [
  {
    id: 16,
    label: '',
    name: 'items',
    controlType: 'items',
    controls: [
      {
        id: 17,
        label: translate.instant('FORM.ITEM_NAME'),
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
        label: translate.instant('FORM.QUANTITY'),
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
        label: translate.instant('FORM.PRICE'),
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
