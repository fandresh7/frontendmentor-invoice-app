import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InvoceFormComponent } from './invoce-form.component'

describe('InvoceFormComponent', () => {
  let component: InvoceFormComponent
  let fixture: ComponentFixture<InvoceFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoceFormComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InvoceFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
