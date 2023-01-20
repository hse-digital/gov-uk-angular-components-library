import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-panel',
  templateUrl: './govuk-panel.component.html',
  styleUrls: ['./govuk-panel.component.scss']
})
export class GovukPanelComponent {
  @Input() public id: any;
  @Input() public titleText: any;
}
