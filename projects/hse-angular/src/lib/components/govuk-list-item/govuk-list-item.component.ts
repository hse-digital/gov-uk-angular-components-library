import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-list-item',
  templateUrl: './govuk-list-item.component.html'
})
export class GovukListItemComponent {
  @Input() public link?: string;
  @Input() public text?: string;
}
