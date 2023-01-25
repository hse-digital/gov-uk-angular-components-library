import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-accordion-section',
  templateUrl: './govuk-accordion-section.component.html'
})
export class GovukAccordionSectionComponent {
  @Input() public id!: string;
  @Input() public heading?: string;
  @Input() public summary?: string;
  @Input() public active?: boolean = false;

  expandClassName?: string = 'govuk-accordion__section--expanded';

  expand() { this.active = !this.active; }
  open() { this.active = true; }
  close() { this.active = false; }
}
