import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-header',
  templateUrl: './govuk-header.component.html',
  styleUrls: ['./govuk-header.component.scss']
})
export class GovukHeaderComponent {
  @Input() title?: string;
  @Input() isLogoTitle?: boolean;
  @Input() logoAlt?: string;
  @Input() titleLink?: string;
  @Input() govukLogoLink?: string = "#";

  setLogoTitle(isLogoTitle: boolean) {
    return isLogoTitle ? `Gov UK logotype` : null; 
  }

  setLogoAlt(logoAlt: string) {
    return logoAlt == '' ? "Gov UK logotype" : logoAlt;
  }
}
