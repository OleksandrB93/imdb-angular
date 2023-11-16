import { TestBed } from '@angular/core/testing';

import { GetTrailerByIdService } from './get-trailer-by-id.service';

describe('GetTrailerByIdService', () => {
  let service: GetTrailerByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTrailerByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
