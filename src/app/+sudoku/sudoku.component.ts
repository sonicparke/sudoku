import { Component, OnInit, Input } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton, MdAnchor } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import * as _ from 'lodash';

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
  public originalPuzzle: string[][];
  public isError: any;
  public highlightSelected: string;
  public selected: number[];
  public options: number[];

  constructor(private gameGenerator: SudokuGeneratorService) {}

  ngOnInit() {
    this.getPuzzle();
    this.getPuzzleAnswerOptions();
    this.setOriginalPuzzle();
  }

  getPuzzle() {
    this.isLoading = true;
    this.gameGenerator.getPuzzle().subscribe(
      (res: any) => {
        this.puzzle = res.grid;
      },
      (error: any) => {
        this.isLoading = false;
        this.isError = true;
      })
  }

  setOriginalPuzzle() {
    this.originalPuzzle = _.cloneDeep(this.puzzle);
  }

  isProtected(rowIndex, index) {
    if(this.originalPuzzle[rowIndex][index] === '') {
      return false;
    }
    else {
      return true;
    }
  }

  getOriginalPuzzle() {
    this.gameGenerator.getOriginalPuzzle().then(
      (puzzle) => {
        this.originalPuzzle = _.cloneDeep(puzzle);
      });
  }

  getPuzzleAnswerOptions() {
    this.options = [1,2,3,4,5,6,7,8,9]
  }

  itemSelect($event, rowIndex, index, item) {
    if(this.originalPuzzle[rowIndex][index] === '') {
      this.highlightSelected = rowIndex + '' + index;
      this.selected = [rowIndex, index];
    }
  }

  optionSelect(item) {
    this.gameGenerator.addAnswer(this.selected[0], this.selected[1], item);
  }

  clearSelectedAnswer(item) {
    this.gameGenerator.clearSelectedAnswer(this.selected[0], this.selected[1], item);
  }

}
