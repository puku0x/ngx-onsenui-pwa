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
      link: 'https://angular.io/',
      icon: 'fa-book'
    },
    {
      label: 'Gitter Chat',
      link: 'https://gitter.im/angular/angular',
      icon: 'fa-commenting'
    },
    {
      label: 'Forum',
      link: 'https://stackoverflow.com/questions/tagged/angular',
      icon: 'ion-chatboxes'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/angular',
      icon: 'fa-twitter'
    },
    {
      label: 'Docs for this template',
      link: 'https://github.com/puku0x/ngx-onsenui-pwa',
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
