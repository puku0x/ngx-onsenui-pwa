import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import * as ons from 'onsenui';

import { MainPageComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rootPage = MainPageComponent;

  constructor(private swUpdate: SwUpdate) { }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        const options = {
          message: 'New version available',
          buttonLabel: 'Update',
          timeout: 6000
        };
        ons.notification.toast(options).then(index => {
          if (index === 0) {
            window.location.reload();
          }
        });
      });
    }
  }
}
