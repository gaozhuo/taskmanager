import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule, MdCardModule, MdInputModule, MdList, MdListModule, MdSlideToggle, MdSliderModule, MdSlideToggleModule,
  MdGridList, MdGridListModule, MdDialogModule, MdAutocompleteModule, MdMenuModule, MdCheckboxModule, MdTooltipModule,
  MdRadioModule, MdDatepickerModule, MdDatepickerToggle, MdNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
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
    MdNativeDateModule
  ],
  exports: [
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
    MdNativeDateModule
  ],
  declarations: []
})
export class SharedModule {
}
