import { Component, OnInit } from '@angular/core';
import { ComicId } from 'src/app/comics/models/comics.interface';
import { Character, Comics } from '../../models/character.interface';
import { MarvelCharactersService } from '../../services/marvel-characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  comicSelected!: ComicId;
  openModal: boolean = false;

  constructor(private charactersService: MarvelCharactersService) {}

  characters: Character[] = [];

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe((data) => {
      this.characters = data.data.results;
      console.log(this.characters);
    });
  }

  comicShow(comicUrl: string) {
    this.charactersService.getComic(comicUrl).subscribe((comicData) => {
      this.comicSelected = comicData.data.results[0];
      this.openModal = true;
    });
  }

  closePopup() {
    this.openModal = false;
  }
}
