import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-summary-list',
  templateUrl: './govuk-summary-list.component.html',
  styleUrls: ['./govuk-summary-list.component.scss']
})
export class GovukSummaryListComponent {
  @Input() public id?: string;
}
