import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getContentTitleText() {
    return element(by.css('ons-page[content] ons-toolbar div.center')).getText();
  }
}
