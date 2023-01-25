import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-date-input',
  templateUrl: './govuk-date-input.component.html'
})
export class GovukDateInputComponent {
  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public class?: string;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

  @Input() public title?: string;
  @Input() public titleClass?: string;
  @Input() public fieldsetMarginBottom?: string;
  @Input() public isPageHeading?: boolean = false;

  @Input() public linkActionText?: string;
  @Input() public linkActionAction?: any;

  @Output() modelChange  = new EventEmitter();

  el: any;

  @Input() public model: any;

  constructor(el: ElementRef) {
    this.el = el;
    this.model = { day: "", month: "", year: "" };
  }
}
