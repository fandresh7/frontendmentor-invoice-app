import { ComponentRef, Directive, ElementRef, OnDestroy, OnInit, ViewContainerRef, inject } from '@angular/core'
import { ControlContainer, FormGroupDirective, NgForm } from '@angular/forms'
import { EMPTY, Subscription, fromEvent, iif, merge, startWith } from 'rxjs'
import { ErrorsComponent } from '../../components/errors/errors.component'

@Directive({
  selector: '[appValidatorArrayMessage]',
  standalone: true
})
export class ValidatorArrayMessageDirective implements OnInit, OnDestroy {
  private controlSubscription!: Subscription

  private parentContainer = inject(ControlContainer)
  private vcr = inject(ViewContainerRef)
  elementRef = inject(ElementRef)

  private componentRef: ComponentRef<ErrorsComponent> | null = null

  get form() {
    return this.parentContainer?.formDirective as NgForm | FormGroupDirective | null
  }

  ngOnInit() {
    const formArray = this.parentContainer.control

    console.log({ control: this.parentContainer.control, parent: this.parentContainer, form: this.form })

    if (!formArray) return

    this.controlSubscription = merge(
      formArray.statusChanges,
      fromEvent(this.elementRef.nativeElement, 'blur'),
      iif(() => !!this.form, this.form!.ngSubmit, EMPTY)
    )
      .pipe(startWith(formArray.status))
      .subscribe(() => {
        if (formArray.errors && this.form?.submitted) {
          if (this.componentRef) return

          this.componentRef = this.vcr.createComponent(ErrorsComponent)
          this.componentRef.changeDetectorRef.markForCheck()
          this.componentRef.setInput('errors', formArray.errors)
        } else {
          this.componentRef?.destroy()
          this.componentRef = null
        }
      })
  }

  ngOnDestroy() {
    this.controlSubscription?.unsubscribe()
  }
}
