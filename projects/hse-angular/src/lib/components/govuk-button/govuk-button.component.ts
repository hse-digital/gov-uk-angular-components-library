import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-button',
  templateUrl: './govuk-button.component.html',
  styleUrls: ['./govuk-button.component.scss']
})
export class GovukButtonComponent {

  @Input() public id!: string;
  @Input() public name: string = '';
  @Input() public classes: string = '';
  @Input() public isLoading: boolean = false;
  @Input() public loadingText: string = 'Loading';
  @Input() public disabled: boolean = false;
  @Input() public link?: string;

  @Output() onClick = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();

  getRouterLink() {
    return this.link ? [this.link] : null;
  }
}
