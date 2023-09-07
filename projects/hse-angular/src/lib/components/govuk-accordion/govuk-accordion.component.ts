import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GovukAccordionSectionComponent } from './govuk-accordion-section.component';

@Component({
  selector: 'govuk-accordion',
  templateUrl: './govuk-accordion.component.html',
  styleUrls: ['./govuk-accordion.component.scss']
})
export class GovukAccordionComponent {
  
  @Input() public id?: string;
  @Input() public showAllText: string = 'Show all sections';
  @Input() public hideAllText: string = 'Hide all sections';

  @ContentChildren(GovukAccordionSectionComponent)
  public tabs!: QueryList<GovukAccordionSectionComponent>;

  sectionButtonText?: string = this.showAllText;
  allOpen?: boolean = false;
  
  toggleAll() {
    if (this.allOpen) {
      this.tabs.toArray().forEach(tab => tab.close());
      this.sectionButtonText = this.showAllText;
    }
    else {
      this.tabs.toArray().forEach(tab => tab.open());
      this.sectionButtonText = this.hideAllText;
    }
    this.allOpen = !this.allOpen;
  }
}
