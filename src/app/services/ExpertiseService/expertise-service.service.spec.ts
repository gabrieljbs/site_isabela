import { TestBed } from '@angular/core/testing';

import { ExpertiseServiceService } from './expertise-service.service';

describe('ExpertiseServiceService', () => {
  let service: ExpertiseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertiseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
