import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-body',
  templateUrl: './govuk-body.component.html',
  styleUrls: ['./govuk-body.component.scss']
})
export class GovukBodyComponent {
  @Input() public id: any;
  @Input() public class: any;

  constructor() {
    this.class = '' 
  }
}