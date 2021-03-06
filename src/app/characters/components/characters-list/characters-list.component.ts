import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ComicId } from 'src/app/comics/models/comics.interface'
import { Character, ComicsItem } from '../../models/character.interface'
import { MarvelCharactersService } from '../../services/marvel-characters.service'

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  @Output() charactersShowed = new EventEmitter<Character[]>()

  comicSelected!: ComicId
  openModal = false
  characters: Character[] = []
  offset = 0
  currentPage = 1
  charsNumber = '10'
  sortBy = 'name'
  pages: number[] = []
  totalCharacters = 0
  numberOfPages = 0
  leftButtons: number[] = []
  rightButtons: number[] = []
  buttonsToShow: number[] = []
  comicsArray: ComicsItem[] = []

  constructor(private charactersService: MarvelCharactersService) {}

  ngOnInit(): void {
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset)
    this.charactersService.getFoundCharacters().subscribe((charsFound: Character[] | null) => {
      console.log(charsFound)
      if (charsFound === null) {
        this.getCharacters(+this.charsNumber, this.sortBy, this.offset)
      } else {
        this.characters = charsFound
      }
    })
  }

  getCharacters(charsByPage: number, sortOpt: string, offSet: number): void {
    this.charactersService
      .getCharacters(charsByPage, sortOpt, offSet)
      .subscribe((data: { data: { results: Character[]; total: number } }) => {
        this.characters = data.data.results
        this.totalCharacters = data.data.total

        this.charactersShowed.emit(this.characters)

        /*  for (const character of this.characters) {
          this.comicsArray.push(...character.comics.items)
        } */

        /* console.log(this.characters)

        console.log(this.comicsArray) */

        this.pagination(this.totalCharacters, charsByPage)
      })
  }

  comicShow(comicUrl: string): void {
    this.charactersService
      .getComic(comicUrl)
      .subscribe((comicData: { data: { results: ComicId[] } }) => {
        this.comicSelected = comicData.data.results[0]
        this.openModal = true
      })
  }

  closePopup(): void {
    this.openModal = false
  }

  page(page: number): void {
    this.currentPage = page
    this.offset = (this.currentPage - 1) * +this.charsNumber
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset)
  }
  numberCharByPage(chars: string): void {
    this.charsNumber = chars
    this.offset = (this.currentPage - 1) * +chars
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset)
  }

  sortOption(sort: string): void {
    this.sortBy = sort
    this.getCharacters(+this.charsNumber, this.sortBy, this.offset)
  }

  pagination(totalCharacters: number, charsByPage: number): void {
    this.numberOfPages = Math.ceil(totalCharacters / charsByPage)
    this.pages = Array(this.numberOfPages)
      .fill(1)
      .map((e, i) => e + i)

    const leftPages = (rest = 0) => {
      return {
        array: this.pages
          .slice(0, this.currentPage - 1)
          .reverse()
          .slice(0, 2 + rest)
          .reverse(),
        rest: function () {
          return 2 - this.array.length
        }
      }
    }

    const rightPages = (rest = 0) => {
      return {
        array: this.pages.slice(this.currentPage).slice(0, 2 + rest),
        rest: function () {
          return 2 - this.array.length
        }
      }
    }

    this.leftButtons = leftPages(rightPages().rest()).array
    this.rightButtons = rightPages(leftPages().rest()).array

    this.buttonsToShow = [...this.leftButtons, this.currentPage, ...this.rightButtons]
  }
}
