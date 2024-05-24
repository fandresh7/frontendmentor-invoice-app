import { Invoice } from '../models/invoice'

export const getInvoicesFromLocalStorage = () => {
  const ls = localStorage.getItem('invoices')
  if (!ls) return []

  const data = JSON.parse(ls) as Invoice[]
  return data
}

export const saveInLocalStorage = (invoices: Invoice[]) => {
  localStorage.setItem('invoices', JSON.stringify(invoices))
}
