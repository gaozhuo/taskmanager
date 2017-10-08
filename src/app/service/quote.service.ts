import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Quote} from '../domain/quote.model';
import {appConfig} from '../app.token';

@Injectable()
export class QuoteService {

  constructor(private httpClient: HttpClient, @Inject(appConfig) private appConfig) {
  }

  getQuote(): Observable<Quote> {
    const url = `${this.appConfig.apiUrl}/quotes/${Math.floor(Math.random() * 10)}`;
    return this.httpClient.get<Quote>(url);
  }

  getQuote2() {
    const url = `${this.appConfig.apiUrl}/quotes/${Math.floor(Math.random() * 10)}`;
    this.httpClient.get<Quote>(url).subscribe(data => console.log(JSON.stringify(data)));
  }

}
