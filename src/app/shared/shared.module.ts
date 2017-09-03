import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdButtonModule, MdCardModule, MdInputModule, MdList, MdListModule, MdSlideToggle, MdSliderModule, MdSlideToggleModule,
  MdGridList, MdGridListModule
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
    MdGridListModule
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
    MdGridListModule
  ],
  declarations: []
})
export class SharedModule {
}
