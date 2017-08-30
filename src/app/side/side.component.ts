import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ons-page[side]',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SidePageComponent implements OnInit {
  essentialLinks = [
    {
      label: 'Docs',
      link: 'https://onsen.io/v2/docs/guide/angular2/',
      icon: 'fa-book'
    },
    {
      label: 'Gitter Chat',
      link: 'https://gitter.im/OnsenUI/OnsenUI',
      icon: 'fa-commenting'
    },
    {
      label: 'Forum',
      link: 'https://community.onsen.io',
      icon: 'ion-chatboxes'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/Onsen_UI',
      icon: 'fa-twitter'
    },
    {
      label: 'Playground',
      link: 'https://tutorial.onsen.io/',
      icon: 'fa-graduation-cap'
    }
  ];

  constructor() { }

  goTo(url) {
    const newWindow = window.open(url, '_blank');
  }

  ngOnInit() {
  }

}
