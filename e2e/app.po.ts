export class TestCli3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-cli3-app h1')).getText();
  }
}
