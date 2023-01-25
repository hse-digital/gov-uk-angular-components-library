import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-fieldset',
  templateUrl: './govuk-fieldset.component.html'
})
export class GovukFieldsetComponent {

  @Input() public id?: string;
  @Input() public class?: string;

  @Input() public hintText?: string;
  @Input() public hintClass?: string;

  @Input() public title?: string;
  @Input() public titleClass?: string;
  @Input() public isPageHeading?: boolean = false;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

}