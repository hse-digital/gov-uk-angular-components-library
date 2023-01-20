import { NgModule } from '@angular/core';

import { GovukButtonComponent } from './components/govuk-button/govuk-button.component';
import { GovukPanelComponent } from './components/govuk-panel/govuk-panel.component';
import { GovukNavbarComponent } from './components/govuk-navbar/govuk-navbar.component';
import { GovukNavComponent } from './components/govuk-nav/govuk-nav.component';
import { GovukHintComponent } from './components/govuk-hint/govuk-hint.component';
import { GovukLabelComponent } from './components/govuk-label/govuk-label.component';
import { GovukErrorComponent } from './components/govuk-error/govuk-error.component';
import { GovukFieldComponent } from './components/govuk-field/govuk-field.component';
import { GovukHeaderComponent } from './components/govuk-header/govuk-header.component';
import { GovukFieldsetComponent } from './components/govuk-fieldset/govuk-fieldset.component';
import { GovukRadioComponent } from './components/govuk-radio/govuk-radio.component';
import { GovukAccordionSectionComponent } from './components/govuk-accordion-section/govuk-accordion-section.component';
import { GovukAccordionComponent } from './components/govuk-accordion/govuk-accordion.component';
import { GovukCheckboxesComponent } from './components/govuk-checkboxes/govuk-checkboxes.component';
import { GovukDateInputComponent } from './components/govuk-date-input/govuk-date-input.component';
import { GovukErrorMessageComponent } from './components/govuk-error-message/govuk-error-message.component';
import { GovukErrorSummaryComponent } from './components/govuk-error-summary/govuk-error-summary.component';
import { GovukInputItemComponent } from './components/govuk-input-item/govuk-input-item.component';
import { GovukLoadingComponent } from './components/govuk-loading/govuk-loading.component';
import { GovukPhaseBannerComponent } from './components/govuk-phase-banner/govuk-phase-banner.component';
import { GovukSelectComponent } from './components/govuk-select/govuk-select.component';
import { GovukTabComponent } from './components/govuk-tab/govuk-tab.component';
import { GovukTabsComponent } from './components/govuk-tabs/govuk-tabs.component';
import { GovukWarningComponent } from './components/govuk-warning/govuk-warning.component';
import { GovukRadiosComponent } from './components/govuk-radios/govuk-radios.component';
import { GovukBodyComponent } from './components/govuk-body/govuk-body.component';
import { GovukTagComponent } from './components/govuk-tag/govuk-tag.component';
import { GovukSummaryListComponent } from './components/govuk-summary-list/govuk-summary-list.component';
import { GovukTaskListComponent } from './components/govuk-task-list/govuk-task-list.component';
import { GovukBackLinkComponent } from './components/govuk-back-link/govuk-back-link.component';
import { GovukDetailsComponent } from './components/govuk-details/govuk-details.component';
import { GovukListComponent } from './components/govuk-list/govuk-list.component';
import { GovukAsideComponent } from './components/govuk-aside/govuk-aside.component';
import { GovukBreakcrumbsComponent } from './components/govuk-breadcrumbs/govuk-breadcrumbs.component';
import { GovukFooterComponent } from './components/govuk-footer/govuk-footer.component';
import { GovukInputComponent } from './components/govuk-input/govuk-input.component';
import { GovukLinkActionComponent } from './components/govuk-link-action/govuk-link-action.component';
import { GovukTextareaComponent } from './components/govuk-textarea/govuk-textarea.component';
import { GovukTaskListItemComponent } from './components/govuk-task-list-item/govuk-task-list-item.component';

import { GovukErrorLineDirective } from './directives/govuk-error-line.directive';
import { WarningButtonDirective } from './directives/warning-button.directive';
import { SecondaryButtonDirective } from './directives/secondary-button.directive';
import { ImportantButtonDirective } from './directives/important-button.directive';

import { ArrowRightIcon } from "./icons/arrow-right.icon";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const components = [
  GovukButtonComponent,
  GovukPanelComponent,
  GovukNavbarComponent,
  GovukNavComponent,
  GovukHintComponent,
  GovukLabelComponent,
  GovukErrorComponent,
  GovukFieldComponent,
  GovukHeaderComponent,
  GovukFieldsetComponent,
  GovukRadioComponent,
  GovukRadiosComponent,
  GovukBodyComponent,
  GovukTagComponent,
  GovukSummaryListComponent,
  GovukTaskListComponent,
  GovukBackLinkComponent,
  GovukDetailsComponent,
  GovukListComponent,
  GovukAsideComponent,
  GovukBreakcrumbsComponent,
  GovukFooterComponent,
  GovukInputComponent,
  GovukLinkActionComponent,
  GovukTextareaComponent,
  GovukTaskListItemComponent,
  GovukAccordionSectionComponent,
  GovukAccordionComponent,
  GovukCheckboxesComponent,
  GovukDateInputComponent,
  GovukErrorMessageComponent,
  GovukErrorSummaryComponent,
  GovukInputItemComponent,
  GovukLoadingComponent,
  GovukPhaseBannerComponent,
  GovukSelectComponent,
  GovukTabComponent,
  GovukTabsComponent,
  GovukWarningComponent,
]

const directives = [
  GovukErrorLineDirective,
  WarningButtonDirective,
  SecondaryButtonDirective,
  ImportantButtonDirective,
]

const icons = [
  ArrowRightIcon
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ...components,
    ...icons,
    ...directives
  ],
  exports: [
    ...components,
    ...icons,
    ...directives
  ],
})
export class HseAngularModule { }
