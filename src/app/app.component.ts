import { Component, OnInit } from '@angular/core';
import hotkeys from 'hotkeys-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  isToggle = false;
  toggle() {
    this.isToggle = !this.isToggle;
  }
}
