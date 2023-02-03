import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import { GovukTaskListItemComponent } from './govuk-task-list-item.component';

@Component({
  selector: 'govuk-task-list',
  templateUrl: './govuk-task-list.component.html',
  styleUrls: ['./govuk-task-list.component.scss']
})
export class GovukTaskListComponent implements AfterViewInit {
  @ContentChildren(GovukTaskListItemComponent)
  private rows!: QueryList<GovukTaskListItemComponent>;
  
  public taskListRows: GovukTaskListItemComponent[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  public ngAfterViewInit(): void {
    this.taskListRows = this.rows.toArray();
    this.changeDetectorRef.detectChanges();
  }
}