import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-panel',
  templateUrl: './govuk-panel.component.html'
})
export class GovukPanelComponent {
  @Input() public id?: string;
  @Input() public title?: string;
}
