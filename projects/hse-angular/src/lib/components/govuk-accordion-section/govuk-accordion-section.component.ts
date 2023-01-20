import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-accordion-section',
  templateUrl: './govuk-accordion-section.component.html',
  styleUrls: ['./govuk-accordion-section.component.scss']
})
export class GovukAccordionSectionComponent {
  @Input() public id: any;
  @Input() public heading: any;
  @Input() public summary: any;
  @Input() public active: any;

  expandClassName

  expand() { }
  open() { }
  close() { }

  constructor() {
    this.active = false;
    this.expandClassName = 'govuk-accordion__section--expanded';
    this.expand = () => this.active = !this.active;
    this.open = () => this.active = true;
    this.close = () => this.active = false;
  }

}
