import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GovukTabComponent } from '../govuk-tab/govuk-tab.component';

@Component({
  selector: 'govuk-tabs',
  templateUrl: './govuk-tabs.component.html',
  styleUrls: ['./govuk-tabs.component.scss']
})
export class GovukTabsComponent {

  @Input() public id: any;
  @Input() public activeTab: any;

  @Output() public activeTabChange: any;
  @Output() public tabClick: any;
  @Output() public tabChange: any;

  tabs: GovukTabComponent[] = []
  showTabs: GovukTabComponent[] = []

  constructor() {
    this.activeTabChange = new EventEmitter();
    this.tabClick = new EventEmitter();
    this.tabChange = new EventEmitter();
  }

  ngOnChanges(changes: any) {
    this.tabActiveChange(changes);
  }

  // contentChildren are set
  ngAfterContentInit() {
    this.showTabs = this.tabs.filter((tab) => !tab.hide);
    const activeTabs = this.tabs.filter((tab) => tab.active);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.tabs[0].active = true;
    }
    if (this.activeTab !== '') {
      this.activeTabChange.emit(this.tabs[0].id);
    }
  }

  tabActiveChange(changes: any) {
    if (!this.tabs) {
      return;
    }
    const activeTabId = changes.activeTab.currentValue;
    this.tabs.forEach((tab) => {
      tab.active = (tab.id === activeTabId);
    });
  }

  onClick(event: any, tabCurrent: { id: any; label: any; active: boolean; }) {
    this.tabs.forEach((tab) => (tab.active = false));
    const tabClickEvent = { originEvent: event, id: tabCurrent.id, name: tabCurrent.label };
    this.tabClick.emit(tabClickEvent);
    if (tabCurrent.id !== this.activeTab) {
      this.tabChange.emit(tabClickEvent);
    }
    tabCurrent.active = true;
    this.activeTabChange.emit(tabCurrent.id);
  }
}
