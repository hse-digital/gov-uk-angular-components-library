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
  
  @Output() modelChange = new EventEmitter();
  @Output() onInputBlur = new EventEmitter();
  @Output() onInputFocus = new EventEmitter();
  @Output() onInputSubmit = new EventEmitter();
  @Output() onInputScroll = new EventEmitter();
  @Output() onDebounce = new EventEmitter();

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

  @Input() public model: any;


  
  showAutocomplete = false;
  selectedIndex: number = 0;
  values: string[] = [];

  @Input() public autocompleteValues!: string[];
  @Input() public debounceFunction?: any;
  @Input() public debounceTimer: number = 2000;
  
  @Input() public minimunNumberCharactersForAutocomplete: number = 0;
  
  @Output() public onSelectedValue = new EventEmitter();

  ngOnInit(){
    if(this.autocompleteValues) this.values = this.autocompleteValues;
    this._subscribeWithDebounceToInputModelChange();
  }  

  private _subscribeWithDebounceToInputModelChange(){
    this.modelChange.pipe(
      debounceTime(this.debounceTimer)
    ).subscribe(() => {
      this.onDebounce.emit();
    })
  }

  onInputOnBlur(event: any){
    this.showAutocomplete = false;
    let value = this._getCurrentSelectedValue();
    this._setNewSelectedValue(value);
    this.onInputBlur.emit(event)
  }

  onInputOnFocus(event: any){
    this.showAutocomplete = true;
    this.onInputFocus.emit(event);
  }

  onInputModelChange(value: any) {
    this._filterValues(value);
    this.selectedIndex = 0;
    this.showAutocomplete = this.values.length != 0;
    this.modelChange.emit(value);
  }

  onArrowDown(){
    if(this.selectedIndex < this.values.length - 1) this.selectedIndex++;
  }

  onArrowUp(){
    if(this.selectedIndex > 0) this.selectedIndex--;
  }
  
  onTab(event: any) {
    event.preventDefault();
    this.showAutocomplete = false;
    let value = this._getCurrentSelectedValue();
    this._setNewSelectedValue(value);
  }

  onEnter() {
    this.showAutocomplete = false;
    let value = this._getCurrentSelectedValue();
    this._setNewSelectedValue(value);
  }

  // Not implemented yet.
  clickOnAutocomplete(i: number){
    this.selectedIndex = i;
    this.showAutocomplete = false;
    let value = this._getCurrentSelectedValue();
    this._setNewSelectedValue(value);
  }

  private _setNewSelectedValue(value: string){
    this.selectedIndex = 0;
    this.model = value;
    this._filterValues(value);
    this.onSelectedValue.emit(value);
  }

  private _filterValues(value: string){
    if(this.autocompleteValues)
      this.values = this.autocompleteValues.filter(x => x.toLocaleLowerCase()?.startsWith(value?.toLocaleLowerCase())) ?? [];
  }

  private _getCurrentSelectedValue(){
    return this.values[this.selectedIndex];
  }

  autocompleteListStyle(i: number){
    let classStyle = this.selectedIndex == i ? 'selected-item' : ''
    return classStyle + (this.values.length - 1 == i ? ' no-border-bottom' : '');
  }

}
