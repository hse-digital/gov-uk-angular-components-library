import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-summary-list-row',
  templateUrl: './govuk-summary-list-row.component.html',
  styleUrls: ['./govuk-summary-list-row.component.scss']
})
export class GovukSummaryListRowComponent {
  @Input() public key?: string;
  @Input() public link?: string;
  @Input() public actionText?: string = 'Change';
  @Input() public actionDetails?: string;
}
