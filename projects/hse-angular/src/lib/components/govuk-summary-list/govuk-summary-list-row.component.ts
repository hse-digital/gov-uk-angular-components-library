import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'govuk-summary-list-row',
  templateUrl: './govuk-summary-list-row.component.html',
})
export class GovukSummaryListRowComponent {
  @Input() public key?: string;
  @Input() public link?: string;
  @Input() public actionText?: string = 'Change';
  @Input() public actionDetails?: string;

  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;

}
