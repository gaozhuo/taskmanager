import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule, MdCardModule, MdInputModule, MdList, MdListModule, MdSlideToggle, MdSliderModule, MdSlideToggleModule,
  MdGridList, MdGridListModule, MdDialogModule, MdAutocompleteModule, MdMenuModule, MdCheckboxModule, MdTooltipModule,
  MdRadioModule, MdDatepickerModule, MdDatepickerToggle, MdNativeDateModule, MdSelectModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectivesModule} from '../directives/directives.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageListSelectComponent} from '../shared/image-list-select/image-list-select.component';

const commonModule = [
  CommonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdSlideToggleModule,
  MdGridListModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdMenuModule,
  MdCheckboxModule,
  MdTooltipModule,
  MdRadioModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSelectModule,
  DirectivesModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    ...commonModule
  ],
  exports: [
    ...commonModule,
    ConfirmDialogComponent,
    ImageListSelectComponent
  ],
  declarations: [ConfirmDialogComponent, ImageListSelectComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {
}
