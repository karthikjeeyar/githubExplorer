import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  getLogoCaption() {
    return element(by.css('.logo__title')).getText();
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
