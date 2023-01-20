import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'govuk-error-summary',
  templateUrl: './govuk-error-summary.component.html',
  styleUrls: ['./govuk-error-summary.component.scss']
})
export class GovukErrorSummaryComponent {

  @Input() public focus: any;
  el: ElementRef;
  errorSummaryValue: any;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @Input() set errorSummary(value) {
    this.errorSummaryValue = value;
    if (value.hasError) {
      setTimeout(() => this.el.nativeElement.querySelector("#errorSummary").focus(), 0);
    }
  }

  get errorSummary() {
    return this.errorSummaryValue;
  }

  setFocus(id: any, $event: { preventDefault: () => void; }) {
    $event.preventDefault();
    if (typeof this.focus !== 'function') {
      return;
    }
    if (!id) {
      console.warn(`govuk-error-summary : Could not set focus on id, does it exist on the component?`);
      return;
    }
    try {
      this.focus(id);
    }
    catch (error) {
      console.warn(`govuk-error-summary : Could not set focus on id: ${id}, does it exist on the component?` + error);
    }
  }

  ngOnInit() {
    if (!this.errorSummary) {
      this.errorSummary = { hasError: false, errors: [] };
      console.warn('govuk-error-summary : Missing errorSummary input, you need to supply the errorSummary');
    }
    if (typeof this.focus !== 'function') {
      console.warn('govuk-error-summary : If you want to set the focus on the input with an error, then you need to supply a function');
    }
  }

}
