import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-error-message',
  templateUrl: './govuk-error-message.component.html',
  styleUrls: ['./govuk-error-message.component.scss']
})
export class GovukErrorMessageComponent {
  @Input() public showError: any;
  @Input() public message: any;
  @Input() public advice: any;
}
