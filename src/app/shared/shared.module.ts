import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule, MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdToolbarModule,
  MdTooltipModule,
  MdChipsModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectivesModule} from '../directives/directives.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageListSelectComponent} from '../shared/image-list-select/image-list-select.component';
import {AgeInputComponent} from '../shared/age-input/age-input.component';
import { ChipsListComponent } from '../shared/chips-list/chips-list.component';

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
  ReactiveFormsModule,
  MdButtonToggleModule,
  MdChipsModule
];

@NgModule({
  imports: [
    ...commonModule
  ],
  exports: [
    ...commonModule,
    ConfirmDialogComponent,
    ImageListSelectComponent,
    AgeInputComponent,
    ChipsListComponent
  ],
  declarations: [ConfirmDialogComponent, ImageListSelectComponent, AgeInputComponent, ChipsListComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {
}
