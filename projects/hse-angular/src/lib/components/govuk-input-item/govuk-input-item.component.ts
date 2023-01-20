import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'govuk-input-item',
  templateUrl: './govuk-input-item.component.html',
  styleUrls: ['./govuk-input-item.component.scss']
})
export class GovukInputItemComponent /** extends GovUKDataCaptureComponent */   {
  @Input() public id: any;
  @Input() public name: any;
  @Input() public classes: any;
    
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

  @Output() public modelChange: EventEmitter<any>;

  maxlength;
  model: any;

  constructor() {
    //super(...arguments);
    this.maxlength = 5;
    this.modelChange = new EventEmitter();
  }
}
