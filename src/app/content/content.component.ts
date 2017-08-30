import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'ons-page[content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentPageComponent implements OnInit {

  essentialLinks = [
    {
      label: 'Core Docs',
      link: 'https://vuejs.org',
      icon: 'fa-book'
    },
    {
      label: 'Gitter Chat',
      link: 'https://gitter.im/vuejs/vue',
      icon: 'fa-commenting'
    },
    {
      label: 'Forum',
      link: 'https://forum.vuejs.org',
      icon: 'ion-chatboxes'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/vuejs',
      icon: 'fa-twitter'
    },
    {
      label: 'Docs for this template',
      link: 'http://vuejs-templates.github.io/webpack/',
      icon: 'fa-file-text'
    }
  ];

  constructor(private service: AppService) { }

  menu() {
    this.service.openMenu();
  }

  goTo(url) {
    const newWindow = window.open(url, '_blank');
  }

  ngOnInit() {
  }

}
