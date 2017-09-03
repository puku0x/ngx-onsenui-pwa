import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnsenModule } from 'ngx-onsenui';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main/main.component';
import { SidePageComponent } from './pages/side/side.component';
import { ContentPageComponent } from './pages/content/content.component';

/**
 * Page components
 */
const pages = [ MainPageComponent, SidePageComponent, ContentPageComponent ];

/**
 * App module
 */
@NgModule({
  declarations: [
    AppComponent,
    ...pages
  ],
  entryComponents: [
    ...pages
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    CoreModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
