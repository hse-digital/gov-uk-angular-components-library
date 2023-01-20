import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-fieldset',
  templateUrl: './govuk-fieldset.component.html',
  styleUrls: ['./govuk-fieldset.component.scss']
})
export class GovukFieldsetComponent {

  @Input() public id: any;

  // Hint parameters
  @Input() public hint_text: any;
  @Input() public hint_classes: any;

  // Legend parameters:
  @Input() public text: any;
  @Input() public classes: any;
  @Input() public fieldset_marginbottom: any;
  @Input() public isPageHeading: any;

  // Fieldset parameters:
  @Input() public describedBy: any;

  // Error parameters
  @Input() public error_text: any;
  @Input() public error_classes: any;

  constructor() {
  }
}