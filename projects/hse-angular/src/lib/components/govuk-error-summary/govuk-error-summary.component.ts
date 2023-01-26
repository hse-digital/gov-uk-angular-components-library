import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-error-summary',
  templateUrl: './govuk-error-summary.component.html'
})
export class GovukErrorSummaryComponent {
  @Input() title!: String;
}

@Component({
  selector: 'govuk-error-link',
  template: `<li><a (click)="scrollToAnchor()">{{message}}</a></li>`
})
export class GovukErrorLinkComponent {
  @Input() anchorId?: string;
  @Input() message?: string;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToAnchor() {
    if (this.anchorId) {
      this.viewportScroller.scrollToAnchor(this.anchorId);
    }
  }
}