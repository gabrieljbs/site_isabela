import { TestBed } from '@angular/core/testing';

import { IndustriesServiceService } from './industries-service.service';

describe('IndustriesServiceService', () => {
  let service: IndustriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
