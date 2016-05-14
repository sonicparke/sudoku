import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SudokuGeneratorService } from './sudoku.generator.service';

describe('SudokuGeneratorService Service', () => {
  beforeEachProviders(() => [SudokuGeneratorService]);

  it('should ...',
      inject([SudokuGeneratorService], (service: SudokuGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
