import { TestBed, inject } from '@angular/core/testing';

import { EditGenresService } from './edit-genres.service';

describe('EditGenresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditGenresService]
    });
  });

  it('should be created', inject([EditGenresService], (service: EditGenresService) => {
    expect(service).toBeTruthy();
  }));
});
