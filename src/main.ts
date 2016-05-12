import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TestCli3AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TestCli3AppComponent);
