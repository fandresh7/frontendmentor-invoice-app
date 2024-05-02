import { FormGroup, Validators } from '@angular/forms'

export interface Form {
  controls: Control[]
  dependencies?: Dependencies
}

export type ControlType = 'input' | 'select' | 'calendar' | 'group' | 'items' | 'checkbox' | 'checkbox-group' | 'radio'

export enum ControlTypeValues {
  INPUT = 'input',
  SELECT = 'select',
  CALENDAR = 'calendar',
  ITEMS = 'items',
  GROUP = 'group',
  CHECKBOX = 'checkbox',
  CHECKBOX_GROUP = 'checkbox-group',
  RADIO = 'radio'
}

export interface Option {
  label: string
  value: unknown
  filter?: string
  selected?: boolean
  disabled?: boolean
}

type CustomValidators = object
type ValidatorsKeys = keyof Omit<typeof Validators & CustomValidators, 'prototype' | 'compose' | 'composeAsync'>

export interface Control {
  label: string
  name: string
  controlType: ControlType
  helpText?: string
  type?: string
  value?: unknown
  filterOptions?: boolean
  disabled?: boolean
  options?: Option[]
  controls?: Control[]
  visible?: (form: FormGroup) => boolean
  order: number
  validators?: {
    [key in ValidatorsKeys]?: unknown
  }
}

export interface Dependencies {
  [key: string]: {
    values: unknown[]
    controls: Control[]
  }[]
}
