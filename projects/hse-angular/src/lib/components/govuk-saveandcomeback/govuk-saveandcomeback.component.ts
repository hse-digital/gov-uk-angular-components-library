import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'save-and-come-back',
  template: `<govuk-body><a (keyup.enter)="onClick.emit()" (click)="onClick.emit()" class="govuk-link" role="link" tabindex="0">Save and come back later</a></govuk-body>`
})
export class GovukSaveAndComeBackComponent {

  @Output() onClick = new EventEmitter();
}
