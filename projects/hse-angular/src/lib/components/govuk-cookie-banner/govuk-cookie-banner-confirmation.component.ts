import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-cookie-banner-confirmation',
  templateUrl: './govuk-cookie-banner-confirmation.component.html',
  styleUrls: ['./govuk-cookie-banner-confirmation.component.scss']
})
export class GovukCookieBannerConfirmationComponent {
  @Input() public id?: string;
  @Output() onHideCookie = new EventEmitter();
}
