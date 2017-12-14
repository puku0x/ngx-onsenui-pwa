import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SwUpdate } from '@angular/service-worker';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OnsenModule,
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: false }),
        CoreModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        SwUpdate
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
