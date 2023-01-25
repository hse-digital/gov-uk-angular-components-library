import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-error-message',
  templateUrl: './govuk-error-message.component.html'
})
export class GovukErrorMessageComponent {
  @Input() public showError?: boolean = false;
  @Input() public message?: string;
  @Input() public advice?: string;
}
