import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestCli3AppComponent } from '../app/test-cli3.component';

beforeEachProviders(() => [TestCli3AppComponent]);

describe('App: TestCli3', () => {
  it('should create the app',
      inject([TestCli3AppComponent], (app: TestCli3AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-cli3 works!\'',
      inject([TestCli3AppComponent], (app: TestCli3AppComponent) => {
    expect(app.title).toEqual('test-cli3 works!');
  }));
});
