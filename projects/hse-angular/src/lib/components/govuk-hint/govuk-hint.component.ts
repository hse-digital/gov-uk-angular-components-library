import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-hint',
  templateUrl: './govuk-hint.component.html',
  styleUrls: ['./govuk-hint.component.scss']
})
export class GovukHintComponent {

  @Input() public id: any;  
  @Input() public text: any;
  @Input() public classes: any;

  constructor() {
    
  }
}