import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dark = false;

  onToggleDartTheme(dark: boolean) {
    this.dark = dark;
  }
}

