import { Component, Input } from '@angular/core';
import { GovukAccordionSectionComponent } from '../govuk-accordion-section/govuk-accordion-section.component';

@Component({
  selector: 'govuk-accordion',
  templateUrl: './govuk-accordion.component.html',
  styleUrls: ['./govuk-accordion.component.scss']
})
export class GovukAccordionComponent {
  
  @Input() public id: any;

  tabs:GovukAccordionSectionComponent[] = []
  sectionButtonText;
  allOpen;
  
  constructor() {
    this.sectionButtonText = 'Open All';
    this.allOpen = false;
  }
  toggleAll() {
    if (this.allOpen) {
      this.tabs.forEach(tab => tab.close());
      this.allOpen = false;
      this.sectionButtonText = 'Open All';
    }
    else {
      this.tabs.forEach(tab => tab.open());
      this.allOpen = true;
      this.sectionButtonText = 'Close All';
    }
  }
}
