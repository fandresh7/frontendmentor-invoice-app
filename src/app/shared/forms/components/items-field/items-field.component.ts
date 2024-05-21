import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core'
import { FormArray, FormGroup } from '@angular/forms'
import { DecimalPipe } from '@angular/common'
import { Subscription, tap } from 'rxjs'
import { TranslateModule } from '@ngx-translate/core'

import { BaseControlComponent, controlProvider, sharedControlDeps } from '../base-control/base-control.component'
import { ControlResolver } from '../../services/control-resolver/control-resolver.service'
import { ControlInjector } from '../../pipes/control-injector.pipe'
import { DeleteIconComponent } from '../../../components/icons.component'
import { AddButtonComponent } from '../../../components/buttons/add-button/add-button.component'

@Component({
  selector: 'app-items-field',
  standalone: true,
  imports: [...sharedControlDeps, ControlInjector, DeleteIconComponent, DecimalPipe, AddButtonComponent, TranslateModule],
  viewProviders: [controlProvider],
  templateUrl: './items-field.component.html'
})
export class ItemsFieldComponent extends BaseControlComponent implements OnInit, OnDestroy {
  controlResolver = inject(ControlResolver)
  cdr = inject(ChangeDetectorRef)

  totalValues: number[] = []
  subscription!: Subscription

  override formControl = new FormArray<FormGroup>([], this.resolveValidators(this.control.control))

  override ngOnInit() {
    this.initialize()
    this.subscription = this.trackFormChanges().subscribe()

    this.updateTotalValues()
  }

  override ngOnDestroy() {
    this.destroy()
    this.subscription.unsubscribe()
  }

  addGroup() {
    const formGroup = new FormGroup({})
    this.formControl.push(formGroup)
    this.updateTotalValues()
  }

  removeGroup(index: number) {
    this.formControl.removeAt(index)
    this.updateTotalValues()
  }

  updateTotalValues() {
    this.totalValues = this.formControl.value.map(group => {
      const quantity = Number(group['quantity']) || 0
      const price = Number(group['price']) || 0
      return quantity * price
    })

    this.cdr.detectChanges()
  }

  trackFormChanges() {
    return this.formControl.valueChanges.pipe(
      tap(() => {
        this.updateTotalValues()
      })
    )
  }
}
