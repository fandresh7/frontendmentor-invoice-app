import { Injectable } from '@angular/core'
import { BehaviorSubject, map, of } from 'rxjs'
import { Invoice, Status, Item } from '../models/invoice'
import { getDate, generateId } from '../utils/invoices'

@Injectable({
  providedIn: 'root'
})
export class InvoicesLsService {
  constructor() {
    this.getInvoices()
  }

  invoicesSubject$ = new BehaviorSubject<Invoice[]>([])
  invoices$ = this.invoicesSubject$.asObservable()

  get invoices(): Invoice[] {
    return this.invoicesSubject$.getValue()
  }

  set invoices(invoices: Invoice[]) {
    localStorage.setItem('invoices', JSON.stringify(invoices))
    this.invoicesSubject$.next(invoices)
  }

  getInvoices() {
    const localStorageData = localStorage.getItem('invoices')
    if (!localStorageData) return

    const invoices = JSON.parse(localStorageData) as Invoice[]
    this.invoices = invoices
  }

  getInvoice(id: string) {
    return this.invoices$.pipe(
      map(invoices => {
        const invoice = invoices.find(i => i.id === id)

        return invoice
      })
    )
  }

  markAsPaid(invoiceId: string) {
    const invoices = this.invoicesSubject$.getValue()
    const updatedInvoices = structuredClone(invoices)

    const index = invoices.findIndex(i => i.id === invoiceId)
    if (index === -1) return

    const invoice = invoices[index]
    const updatedInvoice = structuredClone(invoice)
    updatedInvoice.status = 'paid'

    updatedInvoices[index] = updatedInvoice
    this.invoices = updatedInvoices

    return of(updatedInvoice)
  }

  saveInvoice(invoice: Partial<Invoice>) {
    const invoices = this.invoicesSubject$.getValue()

    const createdAt = getDate(new Date(Date.now()))
    const status: Status = 'pending'
    const id = generateId()

    invoice.items = invoice.items?.map(item => {
      const total = item.quantity * item.price
      return { ...item, total }
    }) as Item[]

    const total = invoice.items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0) ?? 0
    const newInvoice = { id, status, createdAt, total, ...invoice } as Invoice

    invoices.push(newInvoice)
    this.invoices = invoices

    return of(newInvoice)
  }

  saveAsDraft(invoice: Partial<Invoice>) {
    const invoices = this.invoicesSubject$.getValue()

    const id = generateId()
    const createdAt = getDate(new Date(Date.now()))
    const status: Status = 'draft'

    invoice.items = invoice.items?.map(item => {
      const total = item.quantity * item.price
      return { ...item, total }
    }) as Item[]

    const total = invoice.items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0) ?? 0
    const newInvoice = { id, status, createdAt, total, ...invoice } as Invoice

    invoices.push(newInvoice)
    this.invoices = invoices

    return of(newInvoice)
  }

  editInvoice(invoice: Invoice) {
    const invoices = this.invoicesSubject$.getValue()

    const updatedInvoices = structuredClone(invoices)

    const index = invoices.findIndex(i => i.id === invoice.id)

    updatedInvoices[index] = invoice

    this.invoices = updatedInvoices

    return of(invoice)
  }

  deleteInvoice(invoiceId: string) {
    const invoices = this.invoicesSubject$.getValue()

    const updatedInvoices = invoices.filter(invoice => invoice.id !== invoiceId)
    this.invoices = updatedInvoices

    return of(updatedInvoices)
  }
}
