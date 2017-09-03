import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SidePageComponent } from '../side/side.component';
import { ContentPageComponent } from '../content/content.component';
import * as menuAction from '../../core/actions/menu.action';
import * as menuReducer from '../../core/reducers/menu.reducer';

@Component({
  selector: 'ons-page[main]',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  isMenuOpen$: Observable<boolean>;
  subscrption: Subscription;
  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;
  @ViewChild('splitter') splitter;

  /**
   * Constructor
   * @param store
   */
  constructor(private store: Store<menuReducer.State>) {
    this.isMenuOpen$ = store.select(menuReducer.getIsOpen);
  }

  /**
   * Callback for preclose event
   * @param event
   */
  onPreClose() {
    this.store.dispatch(new menuAction.Close());
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.subscrption = this.isMenuOpen$.subscribe(isMenuOpen => {
      if (isMenuOpen) {
        this.splitter.nativeElement.side.open();
      }
    });
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }

}
