import { Directive, HostListener, Input, OnDestroy, OnInit, Type, inject } from '@angular/core'

import { Overlay } from '@angular/cdk/overlay'
import { Dialog } from '@angular/cdk/dialog'

import { Subscription } from 'rxjs'

@Directive({
  selector: '[appToggleDialog]',
  standalone: true
})
export class ToggleDialogDirective implements OnInit, OnDestroy {
  @Input({ required: true }) appDialogComponent!: Type<unknown>

  dialog = inject(Dialog)
  overlay = inject(Overlay)

  isDialogOpen = false
  subscription!: Subscription

  ngOnInit() {
    this.subscription = this.dialog.afterAllClosed.subscribe(() => {
      this.isDialogOpen = false
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.openDialog()
  }

  openDialog() {
    this.isDialogOpen = true
    this.dialog.open(this.appDialogComponent)
  }
}
