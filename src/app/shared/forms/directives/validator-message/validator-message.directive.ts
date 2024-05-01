import { ComponentRef, Directive, ElementRef, OnDestroy, OnInit, ViewContainerRef, inject } from '@angular/core'
import { NgControl, NgForm, FormGroupDirective, ControlContainer } from '@angular/forms'
import { Subscription, merge, fromEvent, iif, EMPTY, startWith } from 'rxjs'

import { ErrorsComponent } from '../../components/errors/errors.component'

@Directive({
  selector: '[appValidatorMessage]',
  standalone: true
})
export class ValidatorMessageDirective implements OnInit, OnDestroy {
  ngControl = inject(NgControl, { self: true })
  elementRef = inject(ElementRef)

  private componentRef: ComponentRef<ErrorsComponent> | null = null

  get form() {
    return this.parentContainer?.formDirective as NgForm | FormGroupDirective | null
  }

  private parentContainer = inject(ControlContainer, { optional: true })
  private vcr = inject(ViewContainerRef)

  controlSubscription!: Subscription

  ngOnInit() {
    if (!this.ngControl.control) return

    this.controlSubscription = merge(
      this.ngControl.control.statusChanges,
      fromEvent(this.elementRef.nativeElement, 'blur'),
      iif(() => !!this.form, this.form!.ngSubmit, EMPTY)
    )
      .pipe(startWith(this.ngControl.control.status))
      .subscribe(() => {
        if (this.ngControl.errors && this.form?.submitted) {
          if (this.componentRef) return

          this.componentRef = this.vcr.createComponent(ErrorsComponent)
          this.componentRef.changeDetectorRef.markForCheck()
          this.componentRef.setInput('errors', this.ngControl.errors)
        } else {
          this.componentRef?.destroy()
          this.componentRef = null
        }
      })
  }

  ngOnDestroy() {
    this.controlSubscription.unsubscribe()
  }
}
