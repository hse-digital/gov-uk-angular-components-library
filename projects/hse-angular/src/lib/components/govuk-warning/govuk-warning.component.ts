import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-warning',
  templateUrl: './govuk-warning.component.html'
})
export class GovukWarningComponent {
  @Input() public message?: string;
  @Input() public background?: string = '#FFF3DC';
}
