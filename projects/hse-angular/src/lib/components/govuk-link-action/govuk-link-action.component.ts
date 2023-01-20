import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-link-action',
  templateUrl: './govuk-link-action.component.html',
  styleUrls: ['./govuk-link-action.component.scss']
})
export class GovukLinkActionComponent {
  @Input() id: any; 
  @Input() text:any;
  @Input() href: any;
  @Input() action: any;
  
  onClick(event: any) {
    this.action.action(event)
  }

}
