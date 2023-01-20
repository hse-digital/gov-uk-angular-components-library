import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-list',
  templateUrl: './govuk-list.component.html',
  styleUrls: ['./govuk-list.component.scss']
})
export class GovukListComponent {
  @Input() public classes: any;
  @Input() public items: any;

  constructor(){}
}
