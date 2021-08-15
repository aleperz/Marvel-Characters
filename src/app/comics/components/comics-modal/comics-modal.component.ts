import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComicId } from '../../models/comics.interface';
import { FavoriteCharactersService } from '../../services/favorite-characters.service';

@Component({
  selector: 'app-comics-modal',
  templateUrl: './comics-modal.component.html',
  styleUrls: ['./comics-modal.component.css'],
})
export class ComicsModalComponent implements OnInit {
  @Input() comic!: ComicId;
  @Output() closeModal = new EventEmitter<void>();

  ComicOnList!: boolean;
  comicFavList!: ComicId[];

  comicInFavoriteList: boolean = true;

  constructor(private favoritesService: FavoriteCharactersService) {}

  ngOnInit(): void {
    console.log(this.comic);
  }
  close() {
    this.closeModal.emit();
  }
  addFavoriteComic() {
    this.favoritesService.addToFavoritesList(this.comic);
  }

  validateFavoriteList() {
    this.comicFavList = this.favoritesService.getFavoritesList();

    return this.comicFavList.some(
      (favoriteComic) => favoriteComic.title === this.comic.title
    );
  }
}
