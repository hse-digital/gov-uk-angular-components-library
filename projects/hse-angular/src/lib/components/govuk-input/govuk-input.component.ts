import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-input',
  templateUrl: './govuk-input.component.html',
  styleUrls: ['./govuk-input.component.scss']
})
export class GovukInputComponent {

  @Input() public id: any;
  @Input() public name: any;
  @Input() public classes: any;
  @Input() public type: any;
  @Input() public describeBy: any;
  @Input() public errorMessage: any;
  @Input() public model: any;
  @Input() public maxlength: any;
  @Input() public linkAction: any;

  @Output() public modelChange: any;
  @Output() public onInputBlur: any;
  @Output() public onInputFocus: any;
  @Output() public onInputSubmit: any;
  @Output() public onInputScroll: any;

  // Label parameters
  @Input() public label_text: any;
  @Input() public label_classes: any;
  @Input() public label_isPageHeading: any;
  @Input() public label_for: any;

  // Hint parameters
  @Input() public hint_text: any;
  @Input() public hint_classes: any;

  // Hint parameters
  @Input() public error_text: any;
  @Input() public error_classes: any;

  // Link action parameters
  @Input() public link_action_text: any;
  @Input() public link_action_action: any;

  constructor() {
    this.modelChange = new EventEmitter();
    this.onInputBlur = new EventEmitter();
    this.onInputFocus = new EventEmitter();
    this.onInputSubmit = new EventEmitter();
    this.onInputScroll = new EventEmitter();
    this.maxlength = 50;
    /** Can be use to set the input value on clicking the link  */
    this.linkAction = { text: '', action: null };
  }


}
