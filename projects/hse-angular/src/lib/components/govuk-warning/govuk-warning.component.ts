import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-warning',
  templateUrl: './govuk-warning.component.html',
  styleUrls: ['./govuk-warning.component.scss']
})
export class GovukWarningComponent {
  @Input() public message: any;
  @Input() public background: any;

  constructor() {
    this.background = '#FFF3DC';
  }
}
