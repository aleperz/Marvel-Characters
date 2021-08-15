import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComicId } from '../../models/comics.interface';

@Component({
  selector: 'app-favorite-comic-card',
  templateUrl: './favorite-comic-card.component.html',
  styleUrls: ['./favorite-comic-card.component.css'],
})
export class FavoriteComicCardComponent implements OnInit {
  @Input() comicFav!: ComicId;
  @Output() deleteComic = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  deleteFavComic() {
    this.deleteComic.emit();
  }
}
