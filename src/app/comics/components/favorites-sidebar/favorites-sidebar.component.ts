import { Component, OnInit } from '@angular/core';
import { ComicId } from '../../models/comics.interface';
import { FavoriteComicsService } from '../../services/favorite-comics.service';

@Component({
  selector: 'app-favorites-sidebar',
  templateUrl: './favorites-sidebar.component.html',
  styleUrls: ['./favorites-sidebar.component.css'],
})
export class FavoritesSidebarComponent implements OnInit {
  favoriteComicsList: ComicId[] = [];

  constructor(private favoritesComicsService: FavoriteComicsService) {}

  ngOnInit(): void {
    this.favoriteComicsList = this.favoritesComicsService.getFavoritesList();
  }

  deleteFavComic(index: number) {
    this.favoritesComicsService.deleteFavoriteComic(index);
  }
}
