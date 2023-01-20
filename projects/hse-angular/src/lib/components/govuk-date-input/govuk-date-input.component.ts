import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-date-input',
  templateUrl: './govuk-date-input.component.html',
  styleUrls: ['./govuk-date-input.component.scss']
})
export class GovukDateInputComponent {
  @Input() public model: any;
  @Input() public id: any;
  @Input() public name: any;
  @Input() public classes: any;
  @Input() public describeBy: any;

  // Hint parameters
  @Input() public hint_text: any;
  @Input() public hint_classes: any;

  // Error parameters
  @Input() public error_text: any;
  @Input() public error_classes: any;

  // Legend parameters
  @Input() public text: any;
  @Input() public fieldset_classes: any;
  @Input() public fieldset_marginbottom: any;
  @Input() public isPageHeading: any;

  // Link action parameters
  @Input() public link_action_text: any;
  @Input() public link_action_action: any;

  @Output() public modelChange: EventEmitter<any>;

  el: any;

  constructor(el: ElementRef) {
    this.el = el;
    this.model = { day: "", month: "", year: "" };
    this.modelChange = new EventEmitter();
  }
}
