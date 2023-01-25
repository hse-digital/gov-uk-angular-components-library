import { Component, Input } from '@angular/core';
@Component({
  selector: 'govuk-list',
  templateUrl: './govuk-list.component.html'
})
export class GovukListComponent {
  @Input() public class?: string;
}
