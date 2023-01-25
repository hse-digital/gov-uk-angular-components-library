import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { GovukCheckboxComponent } from './govuk-checkbox.component';

@Component({
  selector: 'govuk-checkbox-group',
  templateUrl: './govuk-checkbox-group.component.html'
})
export class GovukCheckboxGroupComponent {
  @Input() public id!: string;
  @Input() public name!: string;
  @Input() public class?: string;

  radioModel: string[] = [];
  @Output() public modelChange = new EventEmitter<any>();
  @Input() get model() {
    return this.radioModel;
  } 

  set model(value) {
    this.radioModel = value;
    this.modelChange.emit(this.radioModel);
  }

  @Input() public title?: string;
  @Input() public titleClass?: string;
  @Input() public fieldsetMarginBottom: any;
  @Input() public isPageHeading: boolean = false;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClasses?: string;

  @Output() onCheckboxSelected = new EventEmitter<{}>();

  @ContentChildren(GovukCheckboxComponent)
  private checkboxes?: QueryList<GovukCheckboxComponent>;

  ngAfterViewInit(): void {
    let checkboxes = this.checkboxes?.toArray();
    checkboxes?.forEach((checkbox) => {
      checkbox.onClicked.subscribe(_ => {
        this.model = checkboxes?.filter(x => x.checked).map(x => x.value.toString()) ?? [];
        this.onCheckboxSelected.emit(this.model);
      });
    });
  }

}
