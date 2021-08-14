import { TestBed } from '@angular/core/testing';

import { MarvelCharactersService } from './marvel-characters.service';

describe('MarvelCharactersService', () => {
  let service: MarvelCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
