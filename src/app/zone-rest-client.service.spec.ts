import { TestBed, inject } from '@angular/core/testing';

import { ZoneRestClientService } from './zone-rest-client.service';

describe('ZoneRestClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZoneRestClientService]
    });
  });

  it('should be created', inject([ZoneRestClientService], (service: ZoneRestClientService) => {
    expect(service).toBeTruthy();
  }));
});
