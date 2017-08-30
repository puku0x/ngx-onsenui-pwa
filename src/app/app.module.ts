import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { SidePageComponent } from './side/side.component';
import { ContentPageComponent } from './content/content.component';

import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    SidePageComponent,
    ContentPageComponent
  ],
  entryComponents: [
    SidePageComponent,
    ContentPageComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
