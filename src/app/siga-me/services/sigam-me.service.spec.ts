import { TestBed } from '@angular/core/testing';

import { SigamMeService } from './sigam-me.service';

describe('SigamMeService', () => {
  let service: SigamMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigamMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
