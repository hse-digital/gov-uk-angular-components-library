import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-hint',
  templateUrl: './govuk-hint.component.html',
  styleUrls: ['./govuk-hint.component.scss']
})
export class GovukHintComponent {

  @Input() public id?: string;  
  @Input() public text?: string;
  @Input() public classes?: string;
}