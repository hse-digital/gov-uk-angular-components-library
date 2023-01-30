import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-list-item',
  template: ''
})
export class GovukListItemComponent {
  @Input() public link?: string;
  @Input() public text?: string;
}
