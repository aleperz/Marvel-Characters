import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Character, ComicsItem } from '../../models/character.interface'

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character!: Character
  @Output() comicModal = new EventEmitter<string>()

  arrayComics: ComicsItem[] = []

  constructor() {}

  ngOnInit(): void {
    this.arrayComics = this.character.comics.items.slice(0, 4)
  }

  openModal(comicUrl: string): void {
    this.comicModal.emit(comicUrl)
  }
}
