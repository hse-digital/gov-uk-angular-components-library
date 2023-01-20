import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'govuk-details',
  templateUrl: './govuk-details.component.html',
  styleUrls: ['./govuk-details.component.scss']
})
export class GovukDetailsComponent {

  status = '';

  @Input() id: any;
  @Input() name: any;
  @Input() classes: any;
  @Input() summaryText: any
  
  @Output() clicked: any;
  @Output() opened: any;
  @Output() closed: any;

  constructor() {
    /**
     * An event emitted when details is clicked, with the current status
     */
    this.clicked = new EventEmitter();
    /**
     * An event emitted when details is opened.
     */
    this.opened = new EventEmitter();
    /**
     * An event emitted when details is closed
     */
    this.closed = new EventEmitter();
    this.status = 'closed';
}

  raiseEvents() {
    if (this.status === 'closed') {
        this.status = 'opened';
        this.opened.emit();
    }
    else {
        this.status = 'closed';
        this.closed.emit();
    }
    this.clicked.emit({ status: this.status });
}
}
