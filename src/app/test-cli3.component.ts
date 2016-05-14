import { Component } from '@angular/core';
import * as _ from 'lodash';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { SudokuComponent } from './+sudoku';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'test-cli3-app',
  templateUrl: 'test-cli3.component.html',
  styleUrls: ['test-cli3.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdAnchor
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@Routes([
  {path: '/sudoku', component: SudokuComponent}
])
export class TestCli3AppComponent {
  title = 'test-cli3 works!';

  constructor(private router: Router) {

  }
}
