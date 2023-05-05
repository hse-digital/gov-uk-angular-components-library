import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-header',
  templateUrl: './govuk-header.component.html',
  styleUrls: ['./govuk-header.component.scss']
})
export class GovukHeaderComponent {
  @Input() title?: string;
  @Input() titleLink?: string;
  @Input() govukLogoLink?: string = "#";
}
