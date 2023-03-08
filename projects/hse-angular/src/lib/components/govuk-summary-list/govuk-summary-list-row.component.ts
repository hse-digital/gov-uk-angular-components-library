import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'govuk-summary-list-row',
  templateUrl: './govuk-summary-list-row.component.html',
})
export class GovukSummaryListRowComponent {
  @Input() public key?: string;
  @Input() public actionText?: string = 'Change';
  @Input() public actionDetails?: string;
  @Input() public showAction = false;
  @Output() public onClick = new EventEmitter();
  @Output() public onKeyupEnter = new EventEmitter();

  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;

}
