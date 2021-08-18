import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Character, ComicsItem } from '../models/character.interface'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MarvelCharactersService {
  constructor(private http: HttpClient) {}
  ts = '1'
  apikey = 'd590de8f5b78cf1e6153450ce1f3ef9a'
  hash = '34f3f1e6d58e0072bd02796f26bc6027'
  urlChar = 'https://gateway.marvel.com:443/v1/public/characters'

  comicsArray: ComicsItem[] = []
  searchResults: Character[] = []
  randomComics: ComicsItem[] = []

  private searchCharacterSubject = new Subject<Character[] | null>()
  public searchCharacter$ = this.searchCharacterSubject.asObservable()

  getCharacters(limit = 10, sort = 'name', charSkip = 0) {
    const params = {
      params: {
        ts: this.ts,
        apikey: this.apikey,
        hash: this.hash,
        limit: limit,
        orderBy: sort,
        offset: charSkip
      }
    }
    return this.http.get<any>(`${this.urlChar}`, params)
  }

  getComic(comicUrl: string) {
    const params = {
      params: { ts: this.ts, apikey: this.apikey, hash: this.hash }
    }
    return this.http.get<any>(`${comicUrl}`, params)
  }

  searchCharacter(searchChar: string) {
    if (!searchChar.trim()) {
      this.searchCharacterSubject.next(null)
    } else {
      const params = {
        params: {
          ts: this.ts,
          apikey: this.apikey,
          hash: this.hash,
          nameStartsWith: searchChar
        }
      }
      this.http.get<any>(`${this.urlChar}`, params).subscribe((data) => {
        this.searchResults = data.data.results
        this.searchCharacterSubject.next(this.searchResults)
      })
    }
  }

  getFoundCharacters() {
    return this.searchCharacter$
  }

  /* getRandomComics() {
    const params = {
      params: {
        ts: this.ts,
        apikey: this.apikey,
        hash: this.hash
      }
    }
    this.http.get<any>(`${this.urlChar}`, params).subscribe((characts) => {
      for (const char of characts) {
        this.comicsArray.push(...char.comics.items)
      }

      for (let i = 0; i <= 3; i++) {
        const n = Math.floor(Math.random() * this.comicsArray.length + 1)
        this.randomComics.push(this.comicsArray[n])
        this.comicsArray.splice(n, 1)
      }
    })
  } */
}
