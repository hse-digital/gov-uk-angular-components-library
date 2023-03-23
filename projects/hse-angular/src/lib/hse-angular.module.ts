import { NgModule } from '@angular/core';

import { GovukButtonComponent } from './components/govuk-button/govuk-button.component';
import { GovukPanelComponent } from './components/govuk-panel/govuk-panel.component';
import { GovukNavbarComponent } from './components/govuk-navbar/govuk-navbar.component';
import { GovukHintComponent } from './components/govuk-hint/govuk-hint.component';
import { GovukLabelComponent } from './components/govuk-label/govuk-label.component';
import { GovukErrorComponent } from './components/govuk-error/govuk-error.component';
import { GovukFieldComponent } from './components/govuk-field/govuk-field.component';
import { GovukHeaderComponent } from './components/govuk-header/govuk-header.component';
import { GovukFieldsetComponent } from './components/govuk-fieldset/govuk-fieldset.component';
import { GovukRadioComponent } from './components/govuk-radio/govuk-radio.component';
import { GovukAccordionComponent } from './components/govuk-accordion/govuk-accordion.component';
import { GovukDateInputComponent } from './components/govuk-date-input/govuk-date-input.component';
import { GovukErrorMessageComponent } from './components/govuk-error-message/govuk-error-message.component';
import { GovukLoadingComponent } from './components/govuk-loading/govuk-loading.component';
import { GovukPhaseBannerComponent } from './components/govuk-phase-banner/govuk-phase-banner.component';
import { GovukSelectComponent } from './components/govuk-select/govuk-select.component';
import { GovukWarningComponent } from './components/govuk-warning/govuk-warning.component';
import { GovukBodyComponent } from './components/govuk-body/govuk-body.component';
import { GovukTagComponent } from './components/govuk-tag/govuk-tag.component';
import { GovukSummaryListComponent } from './components/govuk-summary-list/govuk-summary-list.component';
import { GovukBackLinkComponent } from './components/govuk-back-link/govuk-back-link.component';
import { GovukDetailsComponent } from './components/govuk-details/govuk-details.component';
import { GovukListComponent } from './components/govuk-list/govuk-list.component';
import { GovukAsideComponent } from './components/govuk-aside/govuk-aside.component';
import { GovukFooterComponent } from './components/govuk-footer/govuk-footer.component';
import { GovukInputComponent } from './components/govuk-input/govuk-input.component';
import { GovukLinkActionComponent } from './components/govuk-link-action/govuk-link-action.component';
import { GovukTextareaComponent } from './components/govuk-textarea/govuk-textarea.component';
import { GovukTaskListItemComponent } from './components/govuk-task-list/govuk-task-list-item.component';
import { GovukRadioGroupComponent } from './components/govuk-radio/govuk-radio-group.component';
import { GovukTaskListComponent } from './components/govuk-task-list/govuk-task-list.component';
import { GovukNavComponent } from './components/govuk-navbar/govuk-nav.component';
import { GovukBreadcrumbGroupComponent } from './components/govuk-breadcrumb/govuk-breadcrumb-group.component';
import { GovukAccordionSectionComponent } from './components/govuk-accordion/govuk-accordion-section.component';
import { GovukCheckboxGroupComponent } from './components/govuk-checkbox/govuk-checkbox-group.component';
import { GovukTabComponent } from './components/govuk-tabs/govuk-tab.component';
import { GovukTabGroupComponent } from './components/govuk-tabs/govuk-tab-group.component';
import { GovukBreadcrumbComponent } from './components/govuk-breadcrumb/govuk-breadcrumb.component';
import { GovukPageComponent } from './components/govuk-page/govuk-page.component';
import { GovukCheckboxComponent } from './components/govuk-checkbox/govuk-checkbox.component';
import { GovukListItemComponent } from './components/govuk-list/govuk-list-item.component';
import { GovukSummaryListRowComponent } from './components/govuk-summary-list/govuk-summary-list-row.component';
import { GovukSelectOptionComponent } from './components/govuk-select/govuk-select-option.component';
import { AbsoluteValuePipe, GovukCharacterCountComponent } from './components/govuk-character-count/govuk-character-count.component';
import { GovukInsetTextComponent } from './components/govuk-inset-text/govuk-inset-text.component';
import { GovukNotificationBannerComponent } from './components/govuk-notification-banner/govuk-notification-banner.component';
import { GovukCookieBannerComponent } from './components/govuk-cookie-banner/govuk-cookie-banner.component';
import { GovukCookieBannerConfirmationComponent } from './components/govuk-cookie-banner/govuk-cookie-banner-confirmation.component';

import { GovukErrorLineDirective } from './directives/govuk-error-line.directive';
import { WarningButtonDirective } from './directives/warning-button.directive';
import { SecondaryButtonDirective } from './directives/secondary-button.directive';
import { ImportantButtonDirective } from './directives/important-button.directive';
import { GreyTagDirective } from './directives/grey-tag.directive';
import { NoMarginHintDirective } from './directives/no-margin-hint.directive';
import { SuccessNotificationBannerDirective } from './directives/success-notification-banner.directive';

import { ArrowRightIcon } from "./icons/arrow-right.icon";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GovukErrorLinkComponent, GovukErrorSummaryComponent } from './components/govuk-error-summary/govuk-error-summary.component';
import { GovukInputAutocompleteComponent } from './components/govuk-input-autocomplete/govuk-input-autocomplete.component';
import { GovukCookieBannerMessageComponent } from './components/govuk-cookie-banner/govuk-cookie-banner-message.component';
import { GovukTaskListRowComponent } from './components/govuk-task-list/govuk-task-list-row.component';

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
  GovukRadioGroupComponent,
  GovukBodyComponent,
  GovukTagComponent,
  GovukSummaryListComponent,
  GovukTaskListComponent,
  GovukBackLinkComponent,
  GovukDetailsComponent,
  GovukListComponent,
  GovukAsideComponent,
  GovukBreadcrumbGroupComponent,
  GovukFooterComponent,
  GovukInputComponent,
  GovukLinkActionComponent,
  GovukTextareaComponent,
  GovukTaskListItemComponent,
  GovukAccordionSectionComponent,
  GovukAccordionComponent,
  GovukCheckboxGroupComponent,
  GovukDateInputComponent,
  GovukErrorMessageComponent,
  GovukLoadingComponent,
  GovukPhaseBannerComponent,
  GovukSelectComponent,
  GovukTabComponent,
  GovukTabGroupComponent,
  GovukWarningComponent, 
  GovukBreadcrumbComponent,
  GovukPageComponent,
  GovukCheckboxComponent,
  GovukListItemComponent,  
  GovukSummaryListRowComponent,
  GovukSelectOptionComponent,
  GovukCharacterCountComponent,
  GovukInsetTextComponent,
  GovukNotificationBannerComponent,
  GovukCookieBannerComponent,
  GovukCookieBannerConfirmationComponent,
  GovukErrorSummaryComponent,
  GovukErrorLinkComponent,
  GovukInputAutocompleteComponent,
  GovukTaskListRowComponent,
]

const directives = [
  GovukErrorLineDirective,
  WarningButtonDirective,
  SecondaryButtonDirective,
  ImportantButtonDirective,
  GreyTagDirective,
  NoMarginHintDirective,
  SuccessNotificationBannerDirective,
]

const icons = [
  ArrowRightIcon
]

const pipes = [
  AbsoluteValuePipe,
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
    ...directives,
    ...pipes,
    GovukCookieBannerMessageComponent,
  ],
  exports: [
    ...components,
    ...icons,
    ...directives,
    ...pipes
  ],
})
export class HseAngularModule { }
