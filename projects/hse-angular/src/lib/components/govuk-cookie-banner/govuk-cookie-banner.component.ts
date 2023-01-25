import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'govuk-cookie-banner',
  templateUrl: './govuk-cookie-banner.component.html',
  styleUrls: ['./govuk-cookie-banner.component.scss']
})
export class GovukCookieBannerComponent {
  @Input() public id?: string;
  @Input() public nameService?: string;
  @Input() public viewCookiesLink?: string;

  @Output() cookiesAccepted = new EventEmitter();
  @Output() cookiesRejected = new EventEmitter();

  acceptCookies() {
    this.cookiesAccepted.emit();
  }

  rejectCookies() {
    this.cookiesRejected.emit();
  }

}
