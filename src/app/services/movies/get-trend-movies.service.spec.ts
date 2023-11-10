import { TestBed } from '@angular/core/testing';

import { GetTrendMoviesService } from './get-trend-movies.service';

describe('GetTrendMoviesService', () => {
  let service: GetTrendMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTrendMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
