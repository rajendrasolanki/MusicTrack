import { TestBed, inject } from '@angular/core/testing';

import { AddGenresService } from './add-genres.service';

describe('AddGenresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddGenresService]
    });
  });

  it('should be created', inject([AddGenresService], (service: AddGenresService) => {
    expect(service).toBeTruthy();
  }));
});
