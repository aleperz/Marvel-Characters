import { Component, Input, OnInit } from '@angular/core';
import { ComicId } from 'src/app/comics/models/comics.interface';
import { Character, Data } from '../../models/character.interface';
import { MarvelCharactersService } from '../../services/marvel-characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  comicSelected!: ComicId;
  openModal: boolean = false;
  characters: Character[] = [];
  offset: number = 0;
  pageToShow: number = 1;
  charsNumber: string = '10';
  sortBy: string = 'name';

  constructor(private charactersService: MarvelCharactersService) {}

  ngOnInit(): void {
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
  }

  getCharacters(charsPage: number, sortOpt: string, offS: number) {
    console.log(charsPage);

    this.charactersService
      .getCharacters(charsPage, sortOpt, offS)
      .subscribe((data) => {
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

  page(page: number) {
    this.pageToShow = page;
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
  }
  numberCharByPage(chars: string) {
    this.charsNumber = chars;
    this.offset = (this.pageToShow - 1) * +chars;
    console.log(this.charsNumber);
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
  }

  sortOption(sort: string) {
    this.sortBy = sort;
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
  }
}
