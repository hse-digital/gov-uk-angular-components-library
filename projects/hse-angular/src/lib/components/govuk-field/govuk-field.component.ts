import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-field',
  templateUrl: './govuk-field.component.html',
  styleUrls: ['./govuk-field.component.scss']
})
export class GovukFieldComponent {
  @Input() public id: any;
  @Input() public name: any;
  @Input() public classes: any;
  @Input() public errorMessage: any;

  // Label parameters
  @Input() public label_text: any;
  @Input() public label_classes: any;
  @Input() public label_for: any;
  @Input() public label_isPageHeading: any;

  // Hint parameters
  @Input() public hint_text: any;
  @Input() public hint_classes: any;

  // Error parameters
  @Input() public error_text: any;
  @Input() public error_classes: any;

  constructor() {
  }
}
