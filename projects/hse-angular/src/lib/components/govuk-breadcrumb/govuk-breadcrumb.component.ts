import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-breadcrumb',
  templateUrl: './govuk-breadcrumb.component.html',
  styleUrls: ['./govuk-breadcrumb.component.scss']
})
export class GovukBreadcrumbComponent {
  @Input() public text!: string;
  @Input() public link!: string;
  @Input() public firstChild?: boolean = false;
}
