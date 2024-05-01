/* eslint-disable @typescript-eslint/no-explicit-any */
import { InjectionToken } from '@angular/core'

export const ERROR_MESSAGES: { [key: string]: (args?: any) => string } = {
  required: () => `This field is required`,
  requiredTrue: () => `This field is required`,
  pattern: () => `Does not match the pattern`,
  email: () => `Must be a valid email`,
  minlength: ({ requiredLength }) => `Length must be at least ${requiredLength} characters`,
  customError: error => error
}

export const VALIDATION_ERROR_MESSAGES = new InjectionToken(`Validation Messages`, {
  providedIn: 'root',
  factory: () => ERROR_MESSAGES
})
