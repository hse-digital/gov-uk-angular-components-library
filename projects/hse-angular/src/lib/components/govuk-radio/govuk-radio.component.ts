import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'govuk-radio',
  templateUrl: './govuk-radio.component.html',
  styleUrls: ['./govuk-radio.component.scss']
})
export class GovukRadioComponent {

  @Input() public id: any;
  @Input() public groupName: any;
  @Input() public value: any;
  @Input() public name: any;
  @Input() public label_text: any;
  @Input() public hint_text: any;
  @Input() public model: any = {};

  @Output() public onRadioClicked = new EventEmitter();

  clicked() {
    this.onRadioClicked.emit(this.value);
  }
}
