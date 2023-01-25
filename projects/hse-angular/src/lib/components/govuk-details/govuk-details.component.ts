import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-details',
  templateUrl: './govuk-details.component.html'
})
export class GovukDetailsComponent {

  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public class?: string;
  @Input() public summaryText?: string;

  @Output() clicked = new EventEmitter();
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  isOpen?: boolean = false;

  raiseEvents() {
    this.isOpen ? this.closed.emit() : this.opened.emit();
    this.isOpen = !this.isOpen;
    this.clicked.emit({ isOpen: this.isOpen });   
  }
}
