import { TestBed } from '@angular/core/testing';

import { PeopleServicesService } from './people-services.service';

describe('PeopleServicesService', () => {
  let service: PeopleServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
