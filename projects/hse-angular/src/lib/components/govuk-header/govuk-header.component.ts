import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-header',
  templateUrl: './govuk-header.component.html',
  styleUrls: ['./govuk-header.component.scss']
})
export class GovukHeaderComponent {
  @Input() id: any;
  @Input() serviceName: any;
}
