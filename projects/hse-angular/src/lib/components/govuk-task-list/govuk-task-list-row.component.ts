import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-task-list-row',
  templateUrl: './govuk-task-list-row.component.html',
  styleUrls: ['./govuk-task-list-row.component.scss']
})
export class GovukTaskListRowComponent {
  @Input() public firstItem: boolean = false;
}