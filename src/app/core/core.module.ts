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
import '../utils/debug.util';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/do';


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
