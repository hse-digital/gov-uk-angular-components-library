import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-breadcrumbs',
  templateUrl: './govuk-breadcrumbs.component.html',
  styleUrls: ['./govuk-breadcrumbs.component.scss']
})
export class GovukBreakcrumbsComponent {
  @Input() public items: breadcrumbItem[];

  constructor(){
    this.items = [];
  }
}

export class breadcrumbItem {
  link: string;
  text: string;
  
  constructor(){
    this.link=''
    this.text=''
  }
}
