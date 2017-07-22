import { StyleguideAppPage } from './app.po';

describe('styleguide-app App', () => {
  let page: StyleguideAppPage;

  beforeEach(() => {
    page = new StyleguideAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
