import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-tag',
  templateUrl: './govuk-tag.component.html',
  styleUrls: ['./govuk-tag.component.scss']
})
export class GovukTagComponent {
  @Input() id: any;
  @Input() className: any;

  constructor() {

  }
}
