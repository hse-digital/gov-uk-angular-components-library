import { Component, ElementRef, Input, Query } from '@angular/core';
import { Router } from '@angular/router';
import { GovukNavComponent } from '../govuk-nav/govuk-nav.component';

@Component({
  selector: 'govuk-navbar',
  templateUrl: './govuk-navbar.component.html',
  styleUrls: ['./govuk-navbar.component.scss']
})
export class GovukNavbarComponent {

  constructor(private router: Router, private el: ElementRef) {
  }

  @Input() public id: any;

  navs: GovukNavComponent[] = [];

  createId(choice: string) {
    return choice.toLowerCase().replace(/\s/gm, '-') + '-' + this.id;
  }

  onClick($event: any, nav: any, id: any) {
    $event.preventDefault();
    this.selectNav(nav);
    this.router.navigate([nav.link]);
    this.setFocus(id);
  }


  setFocus(id: any) {
    this.el.nativeElement.querySelector('#' + id).blur();
  }
  selectNav(navCurrent: any) {
    this.navs.forEach(nav => (nav.active = false));
    navCurrent.active = true;
  }
}
