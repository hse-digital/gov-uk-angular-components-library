import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'govuk-error-summary',
  templateUrl: './govuk-error-summary.component.html'
})
export class GovukErrorSummaryComponent implements AfterViewInit {
  @ViewChild("errorSummnaryDiv") errorSummary?: ElementRef;
  @Input() title!: String;
  @Input() autofocus: boolean = true;

  ngAfterViewInit(): void {
    if(this.autofocus) this.focus();
  }  
  
  public focus() {    
    this.errorSummary?.nativeElement.focus(); 
  }
}

@Component({
  selector: 'govuk-error-link',
  template: `<li><a (click)="scrollToAnchor()" (keyup.enter)="scrollToAnchor()" tabindex="0" role="link">{{message}}</a></li>`
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