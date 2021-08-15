import { Injectable } from '@angular/core';
import { ComicId } from '../models/comics.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCharactersService {
  favoritesListComics: ComicId[] = [];
  constructor() {
    if (localStorage.getItem('favoriteListComics')) {
      this.favoritesListComics = JSON.parse(
        localStorage.getItem('favoriteListComics')!
      );
    }
  }

  addToFavoritesList(comic: ComicId) {
    this.favoritesListComics.push(comic);
    localStorage.setItem(
      'favoriteListComics',
      JSON.stringify(this.favoritesListComics)
    );
    console.log(this.favoritesListComics);
  }

  getFavoritesList() {
    return this.favoritesListComics;
  }
}
