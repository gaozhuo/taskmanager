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
import {ServiceModule} from '../service/service.module';
import {HttpClientModule} from '@angular/common/http';
import {appConfig} from '../app.token';


@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceModule.forRoot()
  ],
  exports: [
    HttpModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  providers: [
    {
      provide: appConfig,
      useValue: {apiUrl: 'http://localhost:3003'}
    }]
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
