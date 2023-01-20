import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-back-link',
  templateUrl: './govuk-back-link.component.html',
  styleUrls: ['./govuk-back-link.component.scss']
})
export class GovukBackLinkComponent {
  @Input() id: any;
  @Input() href: any;
  @Input() onBack: any;

  constructor() {
  }

  onClick(event: any){
    if (this.onBack) {
      event.preventDefault();
      this.onBack(event);
    }
  };

}
