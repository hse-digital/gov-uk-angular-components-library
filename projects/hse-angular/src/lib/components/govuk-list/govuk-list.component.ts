import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GovukListItemComponent } from './govuk-list-item.component';
@Component({
  selector: 'govuk-list',
  templateUrl: './govuk-list.component.html'
})
export class GovukListComponent {
  @Input() public classes?: string;

  @ContentChildren(GovukListItemComponent)
  public items!: QueryList<GovukListItemComponent>;

}
