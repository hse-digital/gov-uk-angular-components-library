import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-tab',
  templateUrl: './govuk-tab.component.html',
  styleUrls: ['./govuk-tab.component.scss']
})
export class GovukTabComponent {

  @Input() public id: any;
  @Input() public active: any;
  @Input() public hide: any;
  @Input() public label: any;

  constructor() {
    // Set as the active tab
    this.active = false;
    // Hide the tab
    this.hide = false;
}
}
