import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GovukAccordionSectionComponent } from './govuk-accordion-section.component';

@Component({
  selector: 'govuk-accordion',
  templateUrl: './govuk-accordion.component.html',
  styleUrls: ['./govuk-accordion.component.scss']
})
export class GovukAccordionComponent {
  
  @Input() public id?: string;

  @ContentChildren(GovukAccordionSectionComponent)
  public tabs!: QueryList<GovukAccordionSectionComponent>;

  sectionButtonText?: string = 'Open All';
  allOpen?: boolean = false;
  
  toggleAll() {
    if (this.allOpen) {
      this.tabs.toArray().forEach(tab => tab.close());
      this.sectionButtonText = 'Open All';
    }
    else {
      this.tabs.toArray().forEach(tab => tab.open());
      this.sectionButtonText = 'Close All';
    }
    this.allOpen = !this.allOpen;
  }
}
