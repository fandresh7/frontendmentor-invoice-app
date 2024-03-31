import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core'
import { Subscription } from 'rxjs'
import { DarkModeService } from '../services/dark-mode.service'

@Directive({
  selector: '[appSetModeClass]',
  standalone: true
})
export class SetModeClassDirective implements OnDestroy {
  private darkModeSubscription: Subscription

  constructor(
    private darkModeService: DarkModeService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.darkModeSubscription = this.darkModeService.darkMode$.subscribe(isDark => {
      if (isDark) {
        this.renderer.addClass(this.elementRef.nativeElement, 'dark')
        this.renderer.removeClass(this.elementRef.nativeElement, 'light')
      } else {
        this.renderer.addClass(this.elementRef.nativeElement, 'light')
        this.renderer.removeClass(this.elementRef.nativeElement, 'dark')
      }
    })
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe()
  }
}
