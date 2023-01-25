import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-link-action',
  templateUrl: './govuk-link-action.component.html'
})
export class GovukLinkActionComponent {
  @Input() id?: string; 
  @Input() text?: string;
  @Input() href?: string;
  @Input() action?: any;
  
  onClick(event: any) {
    this.action.action(event)
  }

}
