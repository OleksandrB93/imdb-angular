import { TestBed } from '@angular/core/testing';

import { MovieDataServicesService } from './movie-data-services.service';

describe('MovieDataServicesService', () => {
  let service: MovieDataServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDataServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
