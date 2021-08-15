import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/characters/models/character.interface';
import { MarvelCharactersService } from 'src/app/characters/services/marvel-characters.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<number>();

  data!: Data;
  totalCharacters: number = 0;

  constructor(private charactersService: MarvelCharactersService) {}

  ngOnInit(): void {}

  getData() {
    this.charactersService.getCharacters().subscribe((data) => {
      this.totalCharacters = data.data.total;
    });
  }
}
