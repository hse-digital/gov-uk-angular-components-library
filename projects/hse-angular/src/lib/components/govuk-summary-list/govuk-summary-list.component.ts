import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-summary-list',
  templateUrl: './govuk-summary-list.component.html',
  styleUrls: ['./govuk-summary-list.component.scss']
})
export class GovukSummaryListComponent {
  @Input() id:any;
  @Input() items: summaryItem[];

  constructor(){
    this.items = [];
  }
}

export class summaryItem {
  link: boolean;
  href: string;
  text: string;
  tagText: string;
  tagClassName: string;

  constructor(){
    this.link = false;
    this.href = '';
    this.text = '';
    this.tagText = '';
    this.tagClassName = '';
  }
}
