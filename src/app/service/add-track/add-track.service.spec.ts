import { TestBed, inject } from '@angular/core/testing';

import { AddTrackService } from './add-track.service';

describe('AddTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTrackService]
    });
  });

  it('should be created', inject([AddTrackService], (service: AddTrackService) => {
    expect(service).toBeTruthy();
  }));
});
