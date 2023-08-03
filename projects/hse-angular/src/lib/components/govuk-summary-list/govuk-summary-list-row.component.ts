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
  @Input() public actionSeparator : string = " | ";
  @Input() public actionText2?: string = 'Remove';
  @Input() public actionDetails2?: string;
  @Input() public showAction2 = false;

  @Output() public onClick = new EventEmitter();
  @Output() public onKeyupEnter = new EventEmitter();
  @Output() public onClick2 = new EventEmitter();
  @Output() public onKeyupEnter2 = new EventEmitter();

  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;

}
