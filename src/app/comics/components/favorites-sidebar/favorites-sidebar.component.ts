import { Component, Input, OnInit } from '@angular/core'
import { ComicsItem } from 'src/app/characters/models/character.interface'
import { ComicId } from '../../models/comics.interface'
import { FavoriteComicsService } from '../../services/favorite-comics.service'

@Component({
  selector: 'app-favorites-sidebar',
  templateUrl: './favorites-sidebar.component.html',
  styleUrls: ['./favorites-sidebar.component.css']
})
export class FavoritesSidebarComponent implements OnInit {
  @Input() comicsRandom: ComicsItem[] = []

  favoriteComicsList: ComicId[] = []

  constructor(private favoritesComicsService: FavoriteComicsService) {}

  ngOnInit(): void {
    this.favoriteComicsList = this.favoritesComicsService.getFavoritesList()
    console.log(this.comicsRandom)
  }

  deleteFavComic(index: number) {
    this.favoritesComicsService.deleteFavoriteComic(index)
  }
}
