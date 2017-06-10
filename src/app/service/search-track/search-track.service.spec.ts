import { TestBed, inject } from '@angular/core/testing';

import { SearchTrackService } from './search-track.service';

describe('SearchTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchTrackService]
    });
  });

  it('should be created', inject([SearchTrackService], (service: SearchTrackService) => {
    expect(service).toBeTruthy();
  }));
});
