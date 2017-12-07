import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators';

import { MenuService } from 'app/core/services';
import { SidePageComponent } from 'app/pages/side/side.component';
import { ContentPageComponent } from 'app/pages/content/content.component';

@Component({
  selector: 'ons-page[main]',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  onDestroy = new Subject();
  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;
  @ViewChild('splitter') splitter;

  /**
   * Constructor
   * @param menuService
   */
  constructor(private menuService: MenuService) { }

  /**
   * Initialize
   */
  ngOnInit() {

    this.menuService.state$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => {
        this.splitter.nativeElement.side.open();
      });
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.onDestroy.next();
  }

}
