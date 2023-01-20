import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { GovukRadioComponent } from '../govuk-radio/govuk-radio.component';

@Component({
  selector: 'govuk-radios',
  templateUrl: './govuk-radios.component.html',
  styleUrls: ['./govuk-radios.component.scss']
})
export class GovukRadiosComponent implements AfterViewInit {

  @Input() public id: any;
  @Input() public name: any;
  @Input() public classes: any;
  @Input() public describeBy: any;
  @Input() public errorMessage: any;
  @Input() public model: any;
  @Input() public items: any;

  @Input() public text: any;
  @Input() public fieldset_classes: any;
  @Input() public fieldset_marginbottom: any;
  @Input() public isPageHeading: any;

  // Hint parameters
  @Input() public hint_text: any;
  @Input() public hint_classes: any;

  // Error parameters
  @Input() public error_text: any;
  @Input() public error_classes: any;


  @Output() onRadioSelected = new EventEmitter();

  @ContentChildren(GovukRadioComponent)
  private radios?: QueryList<GovukRadioComponent>;

  constructor() {
  }

  ngAfterViewInit(): void {
    let radios = this.radios?.toArray();
    radios?.forEach(radio => {
      radio.model = this.model;
      radio.onRadioClicked.subscribe(value => this.onRadioSelected.emit(value));
    });
  }

}
