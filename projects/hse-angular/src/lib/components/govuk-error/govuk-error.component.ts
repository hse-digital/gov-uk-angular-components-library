import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-error',
  templateUrl: './govuk-error.component.html',
  styleUrls: ['./govuk-error.component.scss']
})
export class GovukErrorComponent {
  @Input() id: any;
  @Input() text: any;
  @Input() classes: any;
}