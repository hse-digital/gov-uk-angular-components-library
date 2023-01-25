import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[successNotificationBanner]'
})
export class SuccessNotificationBannerDirective implements AfterViewInit {
  
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
      this.renderer.addClass(this.el.nativeElement.querySelector('div.govuk-notification-banner'), 'govuk-notification-banner--success');
  }

}
