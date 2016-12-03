import { Ng2BootcampPage } from './app.po';

describe('ng-2-bootcamp App', function() {
  let page: Ng2BootcampPage;

  beforeEach(() => {
    page = new Ng2BootcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
