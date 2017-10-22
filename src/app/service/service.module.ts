import {NgModule} from '@angular/core';
import {QuoteService} from './quote.service';
import {ProjectService} from './project.service';

@NgModule()
export class ServiceModule {
  static forRoot() {
    return {
      ngModule: ServiceModule,
      providers: [
        QuoteService,
        ProjectService
      ]
    };
  }
}
