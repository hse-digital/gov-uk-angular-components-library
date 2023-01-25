import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-task-list-item',
  templateUrl: './govuk-task-list-item.component.html',
  styleUrls: ['./govuk-task-list-item.component.scss']
})
export class GovukTaskListItemComponent {
  @Input() public section_number?: string;
  @Input() public text?: string;
}
