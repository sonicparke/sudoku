import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import * as _ from 'lodash';

import { SudokuGeneratorService } from './shared/sudoku.generator.service';
import { TileComponent } from './tile/tile.component';

@Component({
  moduleId: module.id,
  selector: 'app-sudoku',
  templateUrl: 'sudoku.component.html',
  styleUrls: ['sudoku.component.css'],
  directives: [
    MdToolbar,
    MdButton,
    MdAnchor,
    MD_CARD_DIRECTIVES,
    TileComponent
  ],
  providers: [
    SudokuGeneratorService
  ]
})
export class SudokuComponent implements OnInit {
  public title: string = 'Sudoku Yo!!'
  public isLoading: boolean;
  public puzzle: string[][];
  public solved_puzzle: string[][];
  public original_puzzle: string[][];
  public isError: any;
  public options: number[];
  public selected: number[];

  constructor(private gameGenerator: SudokuGeneratorService) {}

  ngOnInit() {
    this.getPuzzle();
    this.getSolvedPuzzle();
    this.getPuzzleAnswerOptions();
  }

  getPuzzle() {
    this.isLoading = true;
    this.gameGenerator.getPuzzle().subscribe(
      (res: any) => {
        this.puzzle = res;
      },
      (error: any) => {
        this.isLoading = false;
        this.isError = true;
      })
  }

  getSolvedPuzzle() {
    this.gameGenerator.getSolvedPuzzle().subscribe(
      (res: any) => {
        this.solved_puzzle = res;
      },
      (error: any) => {
        this.isError = true;
      })
  }

  getPuzzleAnswerOptions() {
    this.options = [1,2,3,4,5,6,7,8,9]
  }

  itemSelected(array) {
    console.log('itemSelected Fired: ', array);
    // if(this.original_puzzle[rowIndex][index] === '') {
    //   this.highlightSelected = rowIndex + '' + index;
    //   this.selected = [rowIndex, index];
    // }
  }

  optionSelect(item) {
    this.gameGenerator.addAnswer(this.selected[0], this.selected[1], item);
  }

  clearSelectedAnswer(item) {
    this.gameGenerator.clearSelectedAnswer(this.selected[0], this.selected[1], item);
  }

  submitPuzzle() {
    console.log('this.puzzle :', this.puzzle);
    console.log('this.solved_puzzle :', this.solved_puzzle);
    if(_.isEqual(this.puzzle, this.solved_puzzle)) {
      console.log('correct!');
    }
    else {
      console.log('not correct!');
    }
  }

}
