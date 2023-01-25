import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-aside',
  templateUrl: './govuk-aside.component.html',
  styleUrls: ['./govuk-aside.component.scss']
})
export class GovukAsideComponent {
  @Input() public subsectionTitle: string = '';
}
