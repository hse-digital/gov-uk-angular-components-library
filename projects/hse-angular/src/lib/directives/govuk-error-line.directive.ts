import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[govukErrorLine]'
})
export class GovukErrorLineDirective implements OnChanges {

  @Input() govukErrorLine: any;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.className = this.toggleError();
  }

  toggleError() {
    const errorClass = ' govuk-form-group--error';
    const target = this.el.nativeElement.className;
    return this.govukErrorLine ? target.includes(errorClass) ? target : target.concat(errorClass) :
      target.replace(errorClass, '');
  }

}
