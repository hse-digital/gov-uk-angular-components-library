import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-phase-banner',
  templateUrl: './govuk-phase-banner.component.html',
  styleUrls: ['./govuk-phase-banner.component.scss']
})
export class GovukPhaseBannerComponent {
  @Input() public tag: any;
  @Input() public classes: any;
  @Input() public id: any;

  constructor() {
    this.tag = 'BETA';
  }
}
