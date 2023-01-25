import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-label',
  templateUrl: './govuk-label.component.html'
})
export class GovukLabelComponent {
  @Input() id?: string;
  @Input() text!: string;
  @Input() class?: string;
  @Input() isPageHeading?: boolean = false;
  @Input() for?: string;
}