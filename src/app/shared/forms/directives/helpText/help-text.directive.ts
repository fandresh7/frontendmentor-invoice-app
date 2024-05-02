import { ComponentRef, Directive, ElementRef, Input, OnInit, ViewContainerRef, inject } from '@angular/core'
import { HelpTextComponent } from '../../components/help-text/help-text.component'

@Directive({
  selector: '[appHelpText]',
  standalone: true
})
export class HelpTextDirective implements OnInit {
  @Input() message = ''

  elementRef = inject(ElementRef)
  private vcr = inject(ViewContainerRef)
  private componentRef: ComponentRef<HelpTextComponent> | null = null

  ngOnInit() {
    if (!this.message) return

    this.componentRef = this.vcr.createComponent(HelpTextComponent)
    this.componentRef.setInput('message', this.message)
  }
}
