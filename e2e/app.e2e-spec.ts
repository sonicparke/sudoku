import { TestCli3Page } from './app.po';

describe('test-cli3 App', function() {
  let page: TestCli3Page;

  beforeEach(() => {
    page = new TestCli3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
