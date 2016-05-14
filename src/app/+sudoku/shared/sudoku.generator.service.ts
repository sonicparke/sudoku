import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
/**
 * GameGenerator
 */
export class SudokuGeneratorService {

    puzzle: Puzzle;

    constructor() {
      this.puzzle = new Puzzle();
    }

    getPuzzle() {
      return Promise.resolve(this.puzzle.grid); // How do I do this and not have puzzle.puzzle here?
    }

    getOPuzzle(): Observable<any> {
      return new Observable((observer:any) => {
        observer.next(this.puzzle);

        return () => {
          console.log('detroyed');
        };
      });
    }

    addAnswer(rowIndex: number, index: number, item: any) {
      console.log('rowIndex 2:', rowIndex);
      console.log('index 2:', index);
      console.log('item 2:', item);
      // this.puzzle.grid[rowIndex][index] = item.toString();
      // console.log('this.puzzle.grid :', this.puzzle.grid);
    }

}

class Puzzle {
  grid: string[][];

  constructor() {
    this.grid = [
        ['2','3','','9','4','','6','7',''],
        ['8','','','3','2','5','9','1','4'],
        ['9','','','7','6','','3','2',''],
        ['1','','','','','','7','9','2'],
        ['5','','3','2','1','','4','8','6'],
        ['4','','','6','8','','5','3','1'],
        ['7','','','1','','','','','9'],
        ['6','5','9','8','7','2','1','4','3'],
        ['3','','','','9','','','','7']
    ];
  }


}