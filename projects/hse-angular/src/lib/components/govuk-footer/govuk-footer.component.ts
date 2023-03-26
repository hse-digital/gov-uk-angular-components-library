import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-footer',
  templateUrl: './govuk-footer.component.html'
})
export class GovukFooterComponent {

  @Input() links!: { title: string, href: string }[];
}
