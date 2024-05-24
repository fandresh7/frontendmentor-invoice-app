import { ViewportScroller } from '@angular/common'
import { Injectable, OnDestroy, inject } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Subscription, filter } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ScrollService implements OnDestroy {
  router = inject(Router)
  viewportScroller = inject(ViewportScroller)

  subscription!: Subscription

  constructor() {
    this.scrollEvent()
  }

  scrollEvent() {
    this.subscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
