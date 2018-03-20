import { TestBed, inject } from '@angular/core/testing';

import { DbZoneRestServiceService } from './db-zone-rest-service.service';

describe('DbZoneRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbZoneRestServiceService]
    });
  });

  it('should be created', inject([DbZoneRestServiceService], (service: DbZoneRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
