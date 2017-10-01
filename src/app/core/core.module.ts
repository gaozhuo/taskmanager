import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MdIconRegistry} from '@angular/material';
import {loadSvgResources} from '../utils/svg.util';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    HttpModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              iconRegister: MdIconRegistry,
              sanitizer: DomSanitizer) {
    if (parent) {
      throw Error('CoreModule已存在，不能再次加载');
    }
    loadSvgResources(iconRegister, sanitizer);
  }
}
