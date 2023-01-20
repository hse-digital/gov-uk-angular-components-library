import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-textarea',
  templateUrl: './govuk-textarea.component.html',
  styleUrls: ['./govuk-textarea.component.scss']
})
export class GovukTextareaComponent {
  @Input() public id: any;
  @Input() public name: any;
  @Input() public classes: any;
  @Input() public type: any;
  @Input() public rows: any;
  @Input() public describeBy: any;
  @Input() public errorMessage: any;
  @Input() public model: any;
  @Input() public maxlength: any;

  // Label parameters
  @Input() public label_text: any;
  @Input() public label_classes: any;
  @Input() public label_isPageHeading: any;
  @Input() public label_for: any;

  // Hint parameters
  @Input() public hint_text: any;
  @Input() public hint_classes: any;

  // Error parameters
  @Input() public error_text: any;
  @Input() public error_classes: any;

  @Output() public modelChange: any;

  constructor() {
    this.rows = '5';
    this.modelChange = new EventEmitter();
    this.maxlength = 50;
  }
}
