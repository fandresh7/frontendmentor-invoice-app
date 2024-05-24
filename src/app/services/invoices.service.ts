import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs'

import { Invoice, Item, Status } from '../models/invoice'
import { generateId, getDate } from '../utils/invoices'

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  http = inject(HttpClient)

  constructor() {
    this.getInvoices().subscribe(invoices => {
      this.invoices = invoices
    })
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

  loadInvoices() {
    const ls = localStorage.getItem('invoices')
    if (ls) {
      const data = JSON.parse(ls) as Invoice[]
      return of(data)
    }

    return this.http.get<Invoice[]>('assets/data.json').pipe(tap(this.saveInLocalStorage))
  }

  getInvoices() {
    return this.status$.pipe(
      switchMap(status => {
        return this.loadInvoices().pipe(
          map(invoices => {
            if (!status) return invoices

            return invoices.filter(invoice => invoice.status === status)
          })
        )
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

    this.saveInLocalStorage(updatedInvoices)
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

    this.saveInLocalStorage(invoices)
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

    this.saveInLocalStorage(invoices)
    return of(newInvoice)
  }

  editInvoice(invoice: Invoice) {
    const invoices = this.invoicesSubject$.getValue()

    const updatedInvoices = structuredClone(invoices)

    const index = invoices.findIndex(i => i.id === invoice.id)

    updatedInvoices[index] = invoice

    this.invoices = updatedInvoices

    this.saveInLocalStorage(updatedInvoices)
    return of(invoice)
  }

  deleteInvoice(invoiceId: string) {
    const invoices = this.invoicesSubject$.getValue()

    const updatedInvoices = invoices.filter(invoice => invoice.id !== invoiceId)
    this.invoices = updatedInvoices

    this.saveInLocalStorage(updatedInvoices)
    return of(updatedInvoices)
  }

  saveInLocalStorage(invoices: Invoice[]) {
    localStorage.setItem('invoices', JSON.stringify(invoices))
  }
}
