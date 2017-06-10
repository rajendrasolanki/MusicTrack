import { TestBed, inject } from '@angular/core/testing';

import { AllTrackService } from './all-track.service';

describe('AllTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTrackService]
    });
  });

  it('should be created', inject([AllTrackService], (service: AllTrackService) => {
    expect(service).toBeTruthy();
  }));
});
