import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GovukSummaryListRowComponent } from './govuk-summary-list-row.component';

@Component({
  selector: 'govuk-summary-list',
  templateUrl: './govuk-summary-list.component.html',
  styleUrls: ['./govuk-summary-list.component.scss']
})
export class GovukSummaryListComponent implements AfterViewInit {
  @Input() public id?: string;
  @Input() public classes?: string;
  
  @ContentChildren(GovukSummaryListRowComponent)
  private rows!: QueryList<GovukSummaryListRowComponent>;
  
  public summaryRows: GovukSummaryListRowComponent[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  public ngAfterViewInit(): void {
    this.summaryRows = this.rows.toArray();
    this.changeDetectorRef.detectChanges();
  }
}
