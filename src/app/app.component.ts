import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dark = false;

  constructor(private oc: OverlayContainer) {

  }

  onToggleDartTheme(dark: boolean) {
    this.dark = dark;
    this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }
}

