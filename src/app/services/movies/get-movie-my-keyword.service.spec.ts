import { TestBed } from '@angular/core/testing';

import { GetMovieMyKeywordService } from './get-movie-my-keyword.service';

describe('GetMovieMyKeywordService', () => {
  let service: GetMovieMyKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieMyKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
