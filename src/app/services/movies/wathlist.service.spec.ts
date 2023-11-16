import { TestBed } from '@angular/core/testing';

import { WathlistService } from './wathlist.service';

describe('WathlistService', () => {
  let service: WathlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WathlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
