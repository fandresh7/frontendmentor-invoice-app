import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InvoceStatusComponent } from './invoce-status.component'

describe('InvoceStatusComponent', () => {
  let component: InvoceStatusComponent
  let fixture: ComponentFixture<InvoceStatusComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoceStatusComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InvoceStatusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
