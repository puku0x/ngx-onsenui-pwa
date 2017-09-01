import { Component, OnInit } from '@angular/core';
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
