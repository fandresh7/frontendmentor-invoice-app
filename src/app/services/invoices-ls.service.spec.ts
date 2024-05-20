import { TestBed } from '@angular/core/testing'

import { InvoicesLsService } from './invoices-ls.service'

describe('InvoicesLsService', () => {
  let service: InvoicesLsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(InvoicesLsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
