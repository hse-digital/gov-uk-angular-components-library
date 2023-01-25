import { AfterViewInit, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'govuk-checkbox',
    templateUrl: './govuk-checkbox.component.html'
})
export class GovukCheckboxComponent {
    @Input() id!: string;
    @Input() value!: string;
    @Input() text!: string;
    @Input() hint?: string;

    @Output() onClicked = new EventEmitter();
    
    innerId: string = (Math.random() + 1).toString(36).substring(7);
    checked = false;
}