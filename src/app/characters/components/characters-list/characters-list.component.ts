import { Component, getDebugNode, Input, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Characters, ComicId } from 'src/app/comics/models/comics.interface';
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
  currentPage: number = 1;
  charsNumber: string = '10';
  sortBy: string = 'name';
  pages: number[] = [];
  totalCharacters: number = 0;
  numberOfPages: number = 0;
  leftButtons: number[] = [];
  rightButtons: number[] = [];
  buttonsToShow: number[] = [];

  constructor(private charactersService: MarvelCharactersService) {}

  ngOnInit(): void {
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
    this.charactersService.getFoundCharacters().subscribe((charsFound) => {
      console.log(charsFound);
      if (charsFound === null) {
        this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
      } else {
        this.characters = charsFound;
      }
    });
  }

  getCharacters(charsByPage: number, sortOpt: string, offSet: number) {
    this.charactersService
      .getCharacters(charsByPage, sortOpt, offSet)
      .subscribe((data) => {
        this.characters = data.data.results;
        this.totalCharacters = data.data.total;
        this.pagination(this.totalCharacters, charsByPage);
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
    this.currentPage = page;
    this.offset = (this.currentPage - 1) * +this.charsNumber;
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
  }
  numberCharByPage(chars: string) {
    this.charsNumber = chars;
    this.offset = (this.currentPage - 1) * +chars;
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
  }

  sortOption(sort: string) {
    this.sortBy = sort;
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset);
  }

  pagination(totalCharacters: number, charsByPage: number) {
    this.numberOfPages = Math.ceil(totalCharacters / charsByPage);
    this.pages = Array(this.numberOfPages)
      .fill(1)
      .map((e, i) => e + i);

    const leftPages = (rest: number = 0) => {
      return {
        array: this.pages
          .slice(0, this.currentPage - 1)
          .reverse()
          .slice(0, 2 + rest)
          .reverse(),
        rest: function () {
          return 2 - this.array.length;
        },
      };
    };

    const rightPages = (rest: number = 0) => {
      return {
        array: this.pages.slice(this.currentPage).slice(0, 2 + rest),
        rest: function () {
          return 2 - this.array.length;
        },
      };
    };

    this.leftButtons = leftPages(rightPages().rest()).array;
    this.rightButtons = rightPages(leftPages().rest()).array;

    this.buttonsToShow = [
      ...this.leftButtons,
      this.currentPage,
      ...this.rightButtons,
    ];
  }
}
