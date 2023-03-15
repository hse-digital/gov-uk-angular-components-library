
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'govuk-cookie-banner-message',
  templateUrl: './govuk-cookie-banner-message.component.html',
  styleUrls: ['./govuk-cookie-banner-message.component.css']
})
export class GovukCookieBannerMessageComponent {
  @Input() public id?: string;
  @Input() public nameService?: string;
  @Input() public viewCookiesLink?: string;

  @Output() cookiesAccepted = new EventEmitter();
  @Output() cookiesRejected = new EventEmitter();
}
