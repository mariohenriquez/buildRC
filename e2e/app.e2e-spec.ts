import { BuildRCPage } from './app.po';

describe('build-rc App', () => {
  let page: BuildRCPage;

  beforeEach(() => {
    page = new BuildRCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
