import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-cookie-banner-accepted',
  templateUrl: './govuk-cookie-banner-accepted.component.html',
  styleUrls: ['./govuk-cookie-banner-accepted.component.scss']
})
export class GovukCookieBannerAcceptedComponent {
  @Input() public id?: string;
  @Input() public nameService?: string;
  @Input() public changeCookiesLink?: string;

  @Output() hideCookie = new EventEmitter();
  
  hideCookieMessage(event: any) {
    this.hideCookie.emit();
  }
}
