import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-select-option',
  template: ''
})
export class GovukSelectOptionComponent {
  @Input() public id?: string;
  @Input() public text?: string;
  @Input() public value?: string;
  @Input() public disabled?: boolean = false;
}
