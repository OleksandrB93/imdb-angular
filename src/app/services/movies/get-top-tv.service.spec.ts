import { TestBed } from '@angular/core/testing';

import { GetTopTvService } from './get-top-tv.service';

describe('GetTopTvService', () => {
  let service: GetTopTvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTopTvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
