import { Validators } from '@angular/forms'

export interface Form {
  controls: Control[]
  dependencies?: Dependencies
}

export type ControlType = 'input' | 'select' | 'calendar' | 'group' | 'items'

export enum ControlTypeValues {
  INPUT = 'input',
  SELECT = 'select',
  CALENDAR = 'calendar',
  ITEMS = 'items',
  GROUP = 'group'
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
  customClass?: string
  group?: Control[]
  controls?: Control[]
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
