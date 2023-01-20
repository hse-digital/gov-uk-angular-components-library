import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-loading',
  templateUrl: './govuk-loading.component.html',
  styleUrls: ['./govuk-loading.component.scss']
})
export class GovukLoadingComponent {
  @Input() public slId: any;
  @Input() public isLoading: any;
}
