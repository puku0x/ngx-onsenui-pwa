import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MenuService } from 'app/core/services';

@Component({
  selector: 'ons-page[content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
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
   * @param menuService
   */
  constructor(private menuService: MenuService) { }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Toggle menu
   */
  toggleMenu() {
    this.menuService.toggle();
  }

  /**
   * Go to url
   * @param url
   */
  goTo(url) {
    const newWindow = window.open(url, '_blank');
  }

}
