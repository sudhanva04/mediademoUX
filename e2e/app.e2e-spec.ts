import { MediademoUiPage } from './app.po';

describe('mediademo-ui App', function() {
  let page: MediademoUiPage;

  beforeEach(() => {
    page = new MediademoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
