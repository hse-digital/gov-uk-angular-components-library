import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-notification-banner',
  templateUrl: './govuk-notification-banner.component.html'
})
export class GovukNotificationBannerComponent {
  @Input() public id?: string; 
  @Input() public title?: string;
}
