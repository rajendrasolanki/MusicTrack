import { TestBed, inject } from '@angular/core/testing';

import { AllGenresService } from './all-genres.service';

describe('AllGenresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllGenresService]
    });
  });

  it('should be created', inject([AllGenresService], (service: AllGenresService) => {
    expect(service).toBeTruthy();
  }));
});
