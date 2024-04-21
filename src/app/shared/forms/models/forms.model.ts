import { Validators } from '@angular/forms'

export interface Form {
  controls: Control[]
  dependencies?: Dependencies
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
  controlType: string
  helpText?: string
  type?: string
  value?: unknown
  filterOptions?: boolean
  disabled?: boolean
  options?: Option[]
  customClass?: string
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
