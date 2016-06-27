import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SudokuGeneratorService } from '../shared/sudoku.generator.service';

@Component({
  moduleId: module.id,
  selector: 'app-tile',
  templateUrl: 'tile.component.html',
  styleUrls: ['tile.component.css'],
})

export class TileComponent implements OnInit {

  @Input() answer: number;
  @Input() index: number;
  @Input() rowIndex: number;
  @Input() highlightSelected: any;
  @Output() onSelect:EventEmitter<any>;

  public original_puzzle: string[][];

  constructor(private gameGenerator: SudokuGeneratorService) {
    this.onSelect = new EventEmitter();
  }

  ngOnInit() {
    this.getOriginalPuzzle();
  }

  getOriginalPuzzle() {
    this.gameGenerator.getOriginalPuzzle().then(
      (puzzle) => {
        this.original_puzzle = _.cloneDeep(puzzle);
      });
  }

  isProtected(rowIndex, index) {
    if(this.original_puzzle && this.original_puzzle[this.rowIndex][this.index] === '') {
      return false;
    }
    else {
      return true;
    }
  }

  itemSelect() {
    // console.log('this.original_puzzle[this.rowIndex][this.index] :', this.original_puzzle[this.rowIndex][this.index]);
    var array = [this.rowIndex, this.index];
    this.onSelect.emit(array);
    // if(this.original_puzzle[this.rowIndex][this.index] === '') {
    //   this.onSelect.emit([this.rowIndex, this.index]);
    //   console.log('rowIndex in child :', this.rowIndex);
    //   console.log('index in child :', this.index);

    // }
  }
}
