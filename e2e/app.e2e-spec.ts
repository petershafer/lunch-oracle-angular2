import { LunchOraclePage } from './app.po';

describe('lunch-oracle App', function() {
  let page: LunchOraclePage;

  beforeEach(() => {
    page = new LunchOraclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
