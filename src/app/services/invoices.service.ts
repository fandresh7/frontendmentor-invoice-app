import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, map } from 'rxjs'

import { Invoice } from '../models/invoice'

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  http = inject(HttpClient)

  constructor() {
    this.getInvoices()
  }

  invoicesSubject$ = new BehaviorSubject<Invoice[]>([])
  invoices$ = this.invoicesSubject$.asObservable()

  get invoices(): Invoice[] {
    return this.invoicesSubject$.getValue()
  }

  set invoices(invoice: Invoice) {
    const data = this.invoicesSubject$.getValue()
    data.push(invoice)

    this.invoicesSubject$.next(data)
  }

  getInvoices() {
    return this.http.get<Invoice[]>('assets/data.json').subscribe(invoices => {
      this.invoicesSubject$.next(invoices)
    })
  }

  getInvoice(id: string) {
    return this.invoices$.pipe(
      map(invoices => {
        const invoice = invoices.find(i => i.id === id)

        return invoice
      })
    )
  }
}
