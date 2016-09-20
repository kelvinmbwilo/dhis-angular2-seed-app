import { ScorecardAppPage } from './app.po';

describe('scorecard-app App', function() {
  let page: ScorecardAppPage;

  beforeEach(() => {
    page = new ScorecardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
