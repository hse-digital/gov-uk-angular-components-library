import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-label',
  templateUrl: './govuk-label.component.html',
  styleUrls: ['./govuk-label.component.scss']
})
export class GovukLabelComponent {

  @Input() id: any;
  @Input() text: any;
  @Input() classes: any;
  @Input() isPageHeading: any;
  @Input() for: any;

  constructor() {
    
  }
}

export const emptyLabel = () => ({ text: '' });