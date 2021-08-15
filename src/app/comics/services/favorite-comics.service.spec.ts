import { TestBed } from '@angular/core/testing';

import { FavoriteComicsService } from './favorite-comics.service';

describe('FavoriteCharactersService', () => {
  let service: FavoriteComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
