import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { SudokuGeneratorService } from './shared/sudoku.generator.service';

@Component({
  moduleId: module.id,
  selector: 'app-sudoku',
  templateUrl: 'sudoku.component.html',
  styleUrls: ['sudoku.component.css'],
  directives: [
    MdToolbar,
    MdButton,
    MdAnchor,
    MD_CARD_DIRECTIVES
  ],
  providers: [
    SudokuGeneratorService
  ]
})
export class SudokuComponent implements OnInit {
  public title: string = 'Sudoku Yo!!'
  public isLoading: boolean;
  public puzzle: string[][];
  public isError: any;
  constructor(private gameGenerator: SudokuGeneratorService) {}

  ngOnInit() {
    this.getPuzzle();
  }

  // getPuzzle() {
  //   this.isLoading = true;
  //   this.gameGenerator.getPuzzle().then(
  //     (puzzle) => {
  //       // this.puzzle = puzzle;
  //       this.isLoading = false;
  //     });
  // }

  getPuzzle() {
    this.isLoading = true;
    this.gameGenerator.getOPuzzle().subscribe(
      (res: any) => {
        this.puzzle = res.grid;
      },
      (error: any) => {
        this.isLoading = false;
        this.isError = true;
      })
  }

}
