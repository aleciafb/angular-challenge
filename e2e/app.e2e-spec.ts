import { AngularChallengePage } from './app.po';

describe('angular-challenge App', () => {
  let page: AngularChallengePage;

  beforeEach(() => {
    page = new AngularChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
