import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { SidePageComponent } from './side/side.component';
import { ContentPageComponent } from './content/content.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;

  @ViewChild('splitter') splitter;
  subscrption: Subscription;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.subscrption = this.service.menu$.subscribe(state => {
      if (state === true) {
        this.splitter.nativeElement.side.open();
      }
    });
  }

  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }

}
