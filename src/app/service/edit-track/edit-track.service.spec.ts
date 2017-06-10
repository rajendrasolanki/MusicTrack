import { TestBed, inject } from '@angular/core/testing';

import { EditTrackService } from './edit-track.service';

describe('EditTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditTrackService]
    });
  });

  it('should be created', inject([EditTrackService], (service: EditTrackService) => {
    expect(service).toBeTruthy();
  }));
});
