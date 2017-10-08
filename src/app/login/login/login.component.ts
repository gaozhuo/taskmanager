import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuoteService} from '../../service/quote.service';
import {Observable} from 'rxjs/Observable';
import {Quote} from '../../domain/quote.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote: Quote = {
    id: '1',
    cn: '被击垮通常只是暂时的，但如果你放弃的话，就会使它成为永恒。（Marilyn vos Savant）',
    en: 'Being defeated is often a temporary condition. Giving up is what makes it permanent.',
    pic: '/assets/img/quotes/1.jpg'
  };

  constructor(private fb: FormBuilder, private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['gaozhuo@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required]
    });

    this.quoteService.getQuote().subscribe(data => this.quote = data);

  }

  onSubmit() {

  }

}
