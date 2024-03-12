import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'save-and-come-back',
  template: `<govuk-body><a id="save-and-come-back" (keyup.enter)="onClick.emit()" (click)="onClick.emit()" class="govuk-link" role="link" tabindex="0">{{text}}</a></govuk-body>`
})
export class GovukSaveAndComeBackComponent {

  @Input() text: string = 'Save and come back later';
  @Output() onClick = new EventEmitter();
}
