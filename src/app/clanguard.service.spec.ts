import { TestBed } from '@angular/core/testing';

import { ClanguardService } from './clanguard.service';

describe('ClanguardService', () => {
  let service: ClanguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
