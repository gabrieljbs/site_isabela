import { TestBed } from '@angular/core/testing';

import { GlobalCoverageServiceService } from './global-coverage-service.service';

describe('GlobalCoverageServiceService', () => {
  let service: GlobalCoverageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalCoverageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
