import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-tab',
  templateUrl: './govuk-tab.component.html'
})
export class GovukTabComponent {
  @Input() public id!: string;
  @Input() public active?: boolean = false;
  @Input() public hide?: boolean = false;
  @Input() public label!: string;
}
