import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-error',
  templateUrl: './govuk-error.component.html'
})
export class GovukErrorComponent {
  @Input() public id?: string;
  @Input() public text?: string;
  @Input() public class?: string;
}