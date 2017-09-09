import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule, MdCardModule, MdInputModule, MdList, MdListModule, MdSlideToggle, MdSliderModule, MdSlideToggleModule,
  MdGridList, MdGridListModule, MdDialogModule, MdAutocompleteModule, MdMenuModule
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
    MdMenuModule
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
    MdMenuModule
  ],
  declarations: []
})
export class SharedModule {
}
