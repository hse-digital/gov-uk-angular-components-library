import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-phase-banner',
  templateUrl: './govuk-phase-banner.component.html',
  styleUrls: ['./govuk-phase-banner.component.scss']
})
export class GovukPhaseBannerComponent {
  @Input() public id?: string;
  @Input() public tag?: string = 'BETA';
  @Input() public class?: string;
}
