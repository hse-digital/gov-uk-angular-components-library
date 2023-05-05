import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-page',
  templateUrl: './govuk-page.component.html'
})
export class GovukPageComponent {
  @Input() headerTitle?: string;
  @Input() headerTitleLink?: string;
  @Input() footerLinks!: { title: string, href: string }[];
  @Input() govukLogoLink?: string = "#";
}
