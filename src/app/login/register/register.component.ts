import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  items: string[];
  form: FormGroup;
  private readonly avatarName = 'avatars';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.items = num.map(n => `avatars:svg-${n}`);
    const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      avatar: [img]
    });
  }

}
