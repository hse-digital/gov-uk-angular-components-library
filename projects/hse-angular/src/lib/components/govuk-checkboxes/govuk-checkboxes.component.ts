import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-checkboxes',
  templateUrl: './govuk-checkboxes.component.html',
  styleUrls: ['./govuk-checkboxes.component.scss']
})
export class GovukCheckboxesComponent {
  @Input() public id: any;
  @Input() public name: any;
  @Input() public checkbox_classes: any;
  @Input() public describeBy: any;
  @Input() public radioMode: any;

  @Input() public model: any;

  // Legend parameters
  @Input() public text: any;
  @Input() public fieldset_classes: any;
  @Input() public fieldset_marginbottom: any;
  @Input() public isPageHeading: any;

  // Hint parameters
  @Input() public hint_text: any;
  @Input() public hint_classes: any;

  // Error parameters
  @Input() public error_text: any;
  @Input() public error_classes: any;

  @Output() public modelChange: any;

  el: any;

  constructor(el: ElementRef) {
    this.el = el;
    this.radioMode = false;
    this.modelChange = new EventEmitter();
  }

  /**
   * Experimental mode :
   * Radio mode will change the way that the checkboxes work.
   * They will act more like a radio group where only one option
   * can be selected from the list, with the extra option to check none
   */
  onModelChange(id: any, index: any, choice: { onChange: (arg0: any) => any; checked: any; }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    choice.onChange ? choice.onChange(choice.checked) : null;
    if (!this.radioMode) {
      return;
    }
    const selected = '#' + id + '-' + index;
    this.model.each((x: any, i: any) => {
      x.checked = false;
      const boxId = '#' + id + '-' + i;
      if (boxId !== selected) {
        this.el.nativeElement.querySelector(boxId).checked = false;
      }
      else {
        this.el.nativeElement.querySelector(boxId).checked = this.el.nativeElement.querySelector(boxId).checked;
        x.checked = this.el.nativeElement.querySelector(boxId).checked;
      }
    });
    this.modelChange.emit(this.model);
  }
}
