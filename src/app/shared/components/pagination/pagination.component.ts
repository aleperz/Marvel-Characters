import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Data } from 'src/app/characters/models/character.interface'
import { MarvelCharactersService } from 'src/app/characters/services/marvel-characters.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<number>()
  @Input() pagesArray: number[] = []
  @Input() totalPages = 0

  pageButton = 1
  data!: Data
  totalCharacters = 0
  leftPoints = false
  rightPoints = true
  points = 0

  constructor(private charactersService: MarvelCharactersService) {}

  ngOnInit(): void {}

  getData(): void {
    this.charactersService.getCharacters().subscribe((data) => {
      this.totalCharacters = data.data.total
    })
  }

  sendPage(page: number): void {
    this.pageButton = page
    this.leftPoints = this.pageButton >= 4 ? true : false
    this.rightPoints = this.pageButton >= 1 && this.pageButton < this.totalPages - 4 ? true : false
    this.pageSelected.emit(this.pageButton)
  }

  previousPage(): void {
    if (this.pageButton > 1) {
      this.pageButton -= 1
    }
    this.leftPoints = this.pageButton >= 4 ? true : false
    this.rightPoints = this.pageButton >= 1 && this.pageButton < this.totalPages - 4 ? true : false
    this.pageSelected.emit(this.pageButton)
  }

  nextPage(): void {
    if (this.pageButton < this.totalPages) {
      this.pageButton += 1
    }
    this.leftPoints = this.pageButton >= 4 ? true : false
    this.rightPoints = this.pageButton >= 1 && this.pageButton < this.totalPages - 4 ? true : false
    this.pageSelected.emit(this.pageButton)
  }
}
