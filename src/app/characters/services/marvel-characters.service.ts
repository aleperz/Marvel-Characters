import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EMPTY, Observable, of } from 'rxjs';
import { Character } from '../models/character.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelCharactersService {
  constructor(private http: HttpClient) {}
  ts: string = '1';
  apikey: string = 'd590de8f5b78cf1e6153450ce1f3ef9a';
  hash: string = '34f3f1e6d58e0072bd02796f26bc6027';
  urlChar: string = 'https://gateway.marvel.com:443/v1/public/characters';

  searchResults: Character[] = [];
  private searchCharacterSubject = new Subject<Character[] | null>();
  public searchCharacter$ = this.searchCharacterSubject.asObservable();

  getCharacters(
    limit: number = 10,
    sort: string = 'name',
    charSkip: number = 0
  ): Observable<any> {
    const params = {
      params: {
        ts: this.ts,
        apikey: this.apikey,
        hash: this.hash,
        limit: limit,
        orderBy: sort,
        offset: charSkip,
      },
    };
    return this.http.get<any>(`${this.urlChar}`, params);
  }

  getComic(comicUrl: string): Observable<any> {
    const params = {
      params: { ts: this.ts, apikey: this.apikey, hash: this.hash },
    };
    return this.http.get<any>(`${comicUrl}`, params);
  }

  searchCharacter(searchChar: string) {
    if (!searchChar.trim()) {
      return this.searchCharacterSubject.next(null);
    } else {
      const params = {
        params: {
          ts: this.ts,
          apikey: this.apikey,
          hash: this.hash,
          nameStartsWith: searchChar,
        },
      };
      return this.http.get<any>(`${this.urlChar}`, params).subscribe((data) => {
        this.searchResults = data.data.results;
        this.searchCharacterSubject.next(this.searchResults);
      });
    }
  }

  getFoundCharacters() {
    return this.searchCharacter$;
  }
}
