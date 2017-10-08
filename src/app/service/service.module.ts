import {NgModule} from '@angular/core';
import {QuoteService} from './quote.service';

export {
  QuoteService
};

@NgModule()
export class ServiceModule {
  static forRoot() {
    return {
      ngModule: ServiceModule,
      providers: [
        QuoteService,
      ]
    };
  }
}
