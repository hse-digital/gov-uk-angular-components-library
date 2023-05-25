import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'govuk-formpage',
    templateUrl: './govuk-formpage.component.html'
})
export class GovukFormPageComponent {
    @Input() saveAndContinueText: string = "Save and continue";
    @Input() hideBackButton: boolean = false;
    @Input() processing: boolean = false;
    @Output() saveAndContinue = new EventEmitter();
    @Output() saveAndComeBack = new EventEmitter();
}