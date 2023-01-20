import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'govuk-select',
  templateUrl: './govuk-select.component.html',
  styleUrls: ['./govuk-select.component.scss']
})
export class GovukSelectComponent {

  @Input() public id:any;
  @Input() public name:any;
  @Input() public items:any;
  @Input() public describeBy:any;
  @Input() public classes:any;
  @Input() public model:any;
  
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

  modelChange: EventEmitter<any>;
  onChange: (value: any) => void;

  constructor() {
    /** Selected value from the items.value */
    this.modelChange = new EventEmitter();
    this.onChange = (event) => this.modelChange.emit(event.target.value);
}
}
