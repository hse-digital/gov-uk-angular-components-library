import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { GovukSelectOptionComponent } from './govuk-select-option.component';

@Component({
  selector: 'govuk-select',
  templateUrl: './govuk-select.component.html'
})
export class GovukSelectComponent {

  @Input() public id?: string;
  @Input() public name?: string;

  @Input() public class?: string;
  @Input() public model: any;

  @Input() public label!: string;
  @Input() public labelClass?: string;
  @Input() public labelFor?: string;
  @Input() public isPageHeading: boolean = false;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

  @ContentChildren(GovukSelectOptionComponent)
  public options!: QueryList<GovukSelectOptionComponent>;

  @Output() modelChange = new EventEmitter();
  onChange(event: any) { this.modelChange.emit(event.target.value); }
}
