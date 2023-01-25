import { Component, ContentChildren, ElementRef, Input, Query, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { GovukNavComponent } from './govuk-nav.component';

@Component({
  selector: 'govuk-navbar',
  templateUrl: './govuk-navbar.component.html',
  styleUrls: ['./govuk-navbar.component.scss']
})
export class GovukNavbarComponent {

  @Input() public id?: string;

  @ContentChildren(GovukNavComponent)
  public navs!: QueryList<GovukNavComponent>;

  constructor(private router: Router, private el: ElementRef) {
  }

  createId(choice: string) {
    return choice.toLowerCase().replace(/\s/gm, '-') + '-' + this.id;
  }

  onClick($event: any, nav: GovukNavComponent, id: string) {
    $event.preventDefault();
    this.selectNav(nav);
    this.router.navigate([nav.link]);
    this.setFocus(id);
  }

  setFocus(id: any) {
    this.el.nativeElement.querySelector('#' + id).blur();
  }

  selectNav(navCurrent: GovukNavComponent) {
    this.navs.forEach(nav => (nav.active = false));
    navCurrent.active = true;
  }
}
