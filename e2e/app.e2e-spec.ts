import { AppPage } from './app.po';

describe('ngx-onsenui-pwa App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getContentTitleText()).toEqual('ngx-onsenui-pwa');
  });
});
