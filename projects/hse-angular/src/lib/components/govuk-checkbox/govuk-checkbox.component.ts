import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
    selector: 'govuk-checkbox',
    templateUrl: './govuk-checkbox.component.html'
})
export class GovukCheckboxComponent implements OnChanges {

    @Input() id!: string;
    @Input() value!: string;
    @Input() text!: string;
    @Input() hint?: string;
    @Input() model!: string[];

    @Output() onClicked = new EventEmitter();
    @Output() onKeyupEnter = new EventEmitter();
    
    innerId: string = (Math.random() + 1).toString(36).substring(7);
    checked = false;

    ngOnChanges(): void {
        this.checked = this.model.indexOf(this.value) > -1;
    }
}