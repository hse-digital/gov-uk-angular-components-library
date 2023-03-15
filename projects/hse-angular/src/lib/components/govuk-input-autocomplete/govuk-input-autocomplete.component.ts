import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'govuk-input-autocomplete',
  templateUrl: './govuk-input-autocomplete.component.html',
  styleUrls: ['./govuk-input-autocomplete.component.scss']
})
export class GovukInputAutocompleteComponent implements OnInit {

  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public class?: string;
  @Input() public type?: string;
  @Input() public maxlength?: number = 50;
  @Input() values: string[] = [];
  @Input() model?: string;

  @Output() onDebounce = new EventEmitter();
  @Output() modelChange = new EventEmitter();

  @Input() public label!: string;
  @Input() public labelClass?: string;
  @Input() public isPageHeading?: boolean = false;
  @Input() public labelFor?: string;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

  @Input() public linkActionText?: string;
  @Input() public linkActionAction?: any;

  @Input() searchFunction?: Promise<string[]>;

  showAutocomplete = false;
  selectedIndex: number = 0;

  @Output() public onSelectedValue = new EventEmitter();

  ngOnInit() {
    this.subscribeWithDebounceToInputModelChange();
  }

  onInputOnBlur() {
    if (!this.clickingItem) {
      this.showAutocomplete = false;
    }
  }

  onInputOnFocus() {
    this.showAutocomplete = true;
  }

  onInputModelChange() {
    this.selectedIndex = 0;
    this.modelChange.emit(this.model);
  }

  onArrowDown() {
    if (this.showAutocomplete && this.selectedIndex < this.values.length - 1) {
      this.selectedIndex++;
    }

    if (this.values) {
      this.showAutocomplete = true;
    }
  }

  onArrowUp() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }

    if (this.showAutocomplete && this.values) {
      this.showAutocomplete = true;
    }
  }

  onTab(event: any) {
    event.preventDefault();
    this.setNewSelectedValue();
  }

  onEnter() {
    this.setNewSelectedValue();
  }

  clickingItem = false;
  clickOnAutocomplete(i: number) {
    this.clickingItem = true;
    this.selectedIndex = i;
    this.setNewSelectedValue();
    this.clickingItem = false;
  }

  autocompleteListStyle(i: number) {
    let classStyle = this.selectedIndex == i ? 'selected-item' : ''
    return classStyle + (this.values.length - 1 == i ? ' no-border-bottom' : '');
  }

  private setNewSelectedValue() {
    var value = this.values[this.selectedIndex];
    this.model = value;
    this.showAutocomplete = false;
    this.onSelectedValue.emit(value);
  }

  private subscribeWithDebounceToInputModelChange() {
    this.modelChange.pipe(debounceTime(500)).subscribe(async () => {
      if (this.model || this.model == '') {
        this.values = [];
        this.onDebounce.emit(this.model);
      }
    })
  }

}
