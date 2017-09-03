import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as menuAction from '../../core/actions/menu.action';
import * as menuReducer from '../../core/reducers/menu.reducer';

@Component({
  selector: 'ons-page[content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentPageComponent implements OnInit {
  essentialLinks = [
    {
      label: 'Core Docs',
      link: 'https://angular.io/docs',
      icon: 'fa-book'
    },
    {
      label: 'Gitter Chat',
      link: 'https://gitter.im/angular/angular',
      icon: 'fa-commenting'
    },
    {
      label: 'Forum',
      link: 'https://groups.google.com/d/forum/angular',
      icon: 'fa-comments'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/angular',
      icon: 'fa-twitter'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/angular/angular',
      icon: 'fa-github'
    }
  ];

  /**
   * Constructor
   * @param service
   */
  constructor(private store: Store<menuReducer.State>) { }

  /**
   * Open menu
   */
  openMenu() {
    this.store.dispatch(new menuAction.Open());
  }

  /**
   * Go to url
   * @param url
   */
  goTo(url) {
    const newWindow = window.open(url, '_blank');
  }

  /**
   * Initialize
   */
  ngOnInit() {
  }

}
