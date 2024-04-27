import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ItemsFieldComponent } from './items-field.component'

describe('ItemsFieldComponent', () => {
  let component: ItemsFieldComponent
  let fixture: ComponentFixture<ItemsFieldComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsFieldComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ItemsFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
