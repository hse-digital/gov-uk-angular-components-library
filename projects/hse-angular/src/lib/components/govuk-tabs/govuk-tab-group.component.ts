import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { GovukTabComponent } from './govuk-tab.component';

@Component({
  selector: 'govuk-tab-group',
  templateUrl: './govuk-tab-group.component.html'
})
export class GovukTabGroupComponent {

  @Input() public id?: string;
  @Input() public activeTab?: GovukTabComponent;

  @Output() activeTabChange = new EventEmitter();
  @Output() tabClick = new EventEmitter();
  @Output() tabChange = new EventEmitter();


  @ContentChildren(GovukTabComponent)
  private tabs!: QueryList<GovukTabComponent>;

  showTabs?: GovukTabComponent[] = [];

  ngOnChanges(changes: any) {
    this.tabActiveChange(changes);
  }

  ngAfterContentInit() {
    this.showTabs = this.tabs?.toArray().filter((tab) => !tab.hide);
    const activeTabs = this.tabs?.toArray().filter((tab) => tab.active);
    // if there is no active tab set, activate the first
    
    if (activeTabs.length === 0) {
      this.tabs.first.active = true;
      this.activeTab = this.tabs.first;
    } else {
      this.activeTab = activeTabs[0];
    }
    
    if (this.activeTab !== undefined) {
      this.activeTabChange.emit(this.activeTab?.id);
    }
  }

  tabActiveChange(changes: any) {
    if (!this.tabs) {
      return;
    }
    const activeTabId = changes.activeTab.currentValue;
    this.tabs.toArray().forEach((tab) => {
      tab.active = (tab.id === activeTabId);
    });
  }

  onClick(event: any, tabCurrent: GovukTabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    const tabClickEvent = { originEvent: event, id: tabCurrent.id, name: tabCurrent.label };
    this.tabClick.emit(tabClickEvent);
    if (tabCurrent.id !== this.activeTab?.id) {
      this.tabChange.emit(tabClickEvent);
      this.activeTabChange.emit(tabCurrent.id);
    }
    tabCurrent.active = true;
    this.activeTab = tabCurrent;
  }
}
