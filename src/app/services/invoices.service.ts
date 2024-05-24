import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs'

import { Invoice, Status } from '../models/invoice'
import { generateId, getDate, getItemsWithTotals } from '../utils/invoices'
import { getInvoicesFromLocalStorage, saveInLocalStorage } from '../utils/localStorage'

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  http = inject(HttpClient)

  constructor() {
    this.getInvoices().subscribe()
  }

  invoicesSubject$ = new BehaviorSubject<Invoice[]>([])
  invoices$ = this.invoicesSubject$.asObservable()

  get invoices(): Invoice[] {
    return this.invoicesSubject$.getValue()
  }

  set invoices(invoices: Invoice[]) {
    this.invoicesSubject$.next(invoices)
  }

  statusSubject$ = new BehaviorSubject<Status | null>(null)
  status$ = this.statusSubject$.asObservable()

  get status() {
    return this.statusSubject$.getValue()
  }

  set status(status: Status | null) {
    this.statusSubject$.next(status)
  }

  getFilteredInvoices(invoices: Invoice[], status?: Status | null) {
    if (!status) return invoices
    return invoices.filter(invoice => invoice.status === status)
  }

  loadInvoices(status?: Status | null) {
    const invoicesFromLS = getInvoicesFromLocalStorage()
    if (invoicesFromLS.length > 0) {
      const invoices = this.getFilteredInvoices(invoicesFromLS, status)
      return of(invoices)
    }

    return this.http.get<Invoice[]>('assets/data.json').pipe(
      map(invoices => {
        return this.getFilteredInvoices(invoices, status)
      }),
      tap(invoices => saveInLocalStorage(invoices))
    )
  }

  getInvoices() {
    return this.status$.pipe(
      switchMap(status => {
        return this.loadInvoices(status)
      }),
      tap(invoices => {
        this.invoices = invoices
      })
    )
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

    saveInLocalStorage(updatedInvoices)
    return of(updatedInvoice)
  }

  saveInvoice(invoice: Partial<Invoice>) {
    const invoices = this.invoicesSubject$.getValue()

    const createdAt = getDate(new Date(Date.now()))
    const status: Status = 'pending'
    const id = generateId()

    const items = getItemsWithTotals(invoice)
    const total = items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0) ?? 0

    const newInvoice = { ...invoice, id, status, createdAt, total, items } as Invoice

    invoices.push(newInvoice)
    this.invoices = invoices

    saveInLocalStorage(invoices)
    return of(newInvoice)
  }

  saveAsDraft(invoice: Partial<Invoice>) {
    const invoices = this.invoicesSubject$.getValue()

    const id = generateId()
    const createdAt = getDate(new Date(Date.now()))
    const status: Status = 'draft'

    const items = getItemsWithTotals(invoice)
    const total = items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0) ?? 0

    const newInvoice = { ...invoice, id, status, createdAt, total, items } as Invoice

    invoices.push(newInvoice)
    this.invoices = invoices

    saveInLocalStorage(invoices)
    return of(newInvoice)
  }

  editInvoice(invoice: Invoice) {
    const invoices = this.invoicesSubject$.getValue()

    const updatedInvoices = structuredClone(invoices)

    const index = invoices.findIndex(i => i.id === invoice.id)

    const items = getItemsWithTotals(invoice)
    const total = items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0) ?? 0

    const newInvoice = { ...invoice, total, items } as Invoice
    updatedInvoices[index] = newInvoice

    this.invoices = updatedInvoices

    saveInLocalStorage(updatedInvoices)
    return of(invoice)
  }

  deleteInvoice(invoiceId: string) {
    const invoices = this.invoicesSubject$.getValue()

    const updatedInvoices = invoices.filter(invoice => invoice.id !== invoiceId)
    this.invoices = updatedInvoices

    saveInLocalStorage(updatedInvoices)
    return of(updatedInvoices)
  }
}
