import { TestBed } from '@angular/core/testing';

import { OtherserviceService } from './otherservice.service';

describe('OtherserviceService', () => {
  let service: OtherserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
