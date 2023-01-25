import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { GovukRadioComponent } from '../govuk-radio/govuk-radio.component';

@Component({
  selector: 'govuk-radio-group',
  templateUrl: './govuk-radio-group.component.html'
})
export class GovukRadioGroupComponent implements AfterViewInit {
  modelValue: any;
  @Output() public modelChange = new EventEmitter<any>();

  @Input()
  get model(): any {
    return this.modelValue;
  }

  set model(val: any) {
    this.modelValue = val;
    this.modelChange.emit(this.modelValue);
  }

  @Input() public id?: string;
  @Input() public name!: string;
  @Input() public class?: string;
  @Input() public title?: string;
  @Input() public isPageHeading: boolean = false;

  @Input() public hintText?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

  @Input() public fieldsetClass: any;
  @Input() public fieldsetMarginBottom: any;

  @Output() onRadioSelected = new EventEmitter();

  @ContentChildren(GovukRadioComponent)
  private radios?: QueryList<GovukRadioComponent>;

  ngAfterViewInit(): void {
    let radios = this.radios?.toArray();
    radios?.forEach(radio => {
      radio.onRadioClicked.subscribe(value => {
        this.model = value;
        this.onRadioSelected.emit(value);
      });
    });
  }

}
