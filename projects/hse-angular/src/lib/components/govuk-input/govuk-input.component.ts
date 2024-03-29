import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-input',
  templateUrl: './govuk-input.component.html'
})
export class GovukInputComponent {

  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public class?: string;
  @Input() public type?: string;
  @Input() public step?: string;
  @Input() public maxlength?: number = 50;
  @Input() public suffix?: string;
  @Input() public prefix?: string;

  @Output() modelChange = new EventEmitter();
  @Output() onInputBlur = new EventEmitter();
  @Output() onInputFocus = new EventEmitter();
  @Output() onInputSubmit = new EventEmitter();
  @Output() onInputScroll = new EventEmitter();
  @Output() onKeyupEnter = new EventEmitter();

  @Input() public label!: string;
  @Input() public labelClass?: string;
  @Input() public isPageHeading?: boolean = false;
  @Input() public isAriaRequired?: boolean;
  @Input() public labelFor?: string;
  @Input() public labelledBy?: string;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

  @Input() public linkActionText?: string;
  @Input() public linkActionAction?: any;

  @Input() public model: any;

  setDescribedByAttribute() {
    if (this.hint && this.suffix) {
      return `hint-hint-field-${this.id} lbl-label-field-${this.id} sufix-${this.id}`
    } else if (this.hint && this.prefix) {
      return `hint-hint-field-${this.id} lbl-label-field-${this.id}  prefix-${this.id}`
    } else if (this.hint) {
      return `hint-hint-field-${this.id} lbl-label-field-${this.id}`
    } else if (this.suffix) {
      return `sufix-${this.id}`
    } else if (this.prefix) {
      return `prefix-${this.id}`
    } else {
      return null;
    }
  }

}
