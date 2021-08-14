import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelCharactersService {
  constructor(private http: HttpClient) {}
  hash: string = '34f3f1e6d58e0072bd02796f26bc6027';
  ts: string = '1';
  apikey: string = 'd590de8f5b78cf1e6153450ce1f3ef9a';
  urlChar: string =
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d590de8f5b78cf1e6153450ce1f3ef9a';

  searchResults: Character[] = [];
  private searchCharacterSubject = new Subject<Character[]>();
  public searchCharacter$ = this.searchCharacterSubject.asObservable();

  getCharacters(): Observable<any> {
    const params = {
      params: { limit: '10' },
    };
    return this.http.get<any>(`${this.urlChar}&hash=${this.hash}`, params);
  }

  getComic(comicUrl: string) {
    const params = {
      params: { ts: this.ts, apikey: this.apikey, hash: this.hash },
    };
    return this.http.get<any>(`${comicUrl}`, params);
  }

  searchCharacter(name: string) {
    return this.http
      .get<any>(`${this.urlChar}&hash=${this.hash}?q=${name}&_limit=4`)
      .subscribe((data) => {
        this.searchResults = data.data.results;
        this.searchCharacterSubject.next(this.searchResults);
        console.log(this.searchResults);
      });
  }

  getFoundCharacters() {
    return this.searchCharacter$;
  }
}
