import { AppPage } from './app.po';

describe('gitexplorer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should have a valid title', () => {
    page.navigateTo();
    console.log(page.getLogoCaption());
    expect(page.getLogoCaption()).toEqual('Git Explorer');
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to public!');
  });
});
