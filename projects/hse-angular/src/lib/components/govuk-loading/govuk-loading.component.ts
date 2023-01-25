import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-loading',
  templateUrl: './govuk-loading.component.html'
})
export class GovukLoadingComponent {
  @Input() public id?: string;
  @Input() public isLoading?: boolean = false;
}
