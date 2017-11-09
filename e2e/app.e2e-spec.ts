import { BuildinsPage } from './app.po';

describe('buildins App', function() {
  let page: BuildinsPage;

  beforeEach(() => {
    page = new BuildinsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
