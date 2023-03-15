import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'govuk-cookie-banner',
  templateUrl: './govuk-cookie-banner.component.html'
})
export class GovukCookieBannerComponent {

  @Input() viewCookiesLink!: string;
  @Input() changeCookiesLink!: string;
  @Input() title!: string;

  @Input() showCookieBanner: boolean = true;
  showCookieBannerAccepted: boolean = false;
  showCookieBannerRejected: boolean = false;

  @Output() onChangeCookies = new EventEmitter();
  @Output() onCookiesAccepted = new EventEmitter();
  @Output() onCookiesRejected = new EventEmitter();
  @Output() onHideCookieBannerConfirmation = new EventEmitter();

  cookiesAccepted() {
    this.showCookieBannerRejected = false;
    this.showCookieBannerAccepted = true;
    this.onCookiesAccepted.emit();
  }

  cookiesRejected() {
    this.showCookieBannerRejected = true;
    this.showCookieBannerAccepted = false;
    this.onCookiesRejected.emit();
  }

  hideCookieBannerConfirmation() {
    this.showCookieBannerRejected = false;
    this.showCookieBannerAccepted = false;
    this.onHideCookieBannerConfirmation.emit();
  }
}