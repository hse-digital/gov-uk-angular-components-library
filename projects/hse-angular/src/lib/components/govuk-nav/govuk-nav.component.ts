import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-nav',
  templateUrl: './govuk-nav.component.html',
  styleUrls: ['./govuk-nav.component.scss']
})
export class GovukNavComponent {

  @Input() public id: any;
  @Input() public label: any;
  @Input() public link: any;
  @Input() public active: any;
}
