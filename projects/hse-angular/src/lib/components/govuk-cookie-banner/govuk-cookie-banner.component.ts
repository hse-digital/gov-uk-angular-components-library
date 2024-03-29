import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'govuk-cookie-banner',
  templateUrl: './govuk-cookie-banner.component.html'
})
export class GovukCookieBannerComponent {

  @Input() viewCookiesLink!: string;
  @Input() changeCookiesLink!: string;
  @Input() title!: string;

  @Input() cookiesAccepted: boolean = false;
  @Input() showCookieBanner: boolean = true;
  @Input() showConfirmBanner: boolean = false;

  @Input() acceptCookiesText: string = "Accept additional";
  @Input() rejectCookiesText: string = "Reject additional cookies";
  @Input() viewCookiesText: string = "View cookies";

  @Output() onChangeCookies = new EventEmitter();
  @Output() onCookiesAccepted = new EventEmitter();
  @Output() onCookiesRejected = new EventEmitter();
  @Output() onHideCookieBannerConfirmation = new EventEmitter();

}