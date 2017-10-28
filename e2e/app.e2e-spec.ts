import { Figure2dPage } from './app.po';

describe('figure2d App', () => {
  let page: Figure2dPage;

  beforeEach(() => {
    page = new Figure2dPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
