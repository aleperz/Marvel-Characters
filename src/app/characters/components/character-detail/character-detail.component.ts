import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  @Input() character!: Character;
  @Output() comicModal = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  openModal(comicUrl: string) {
    this.comicModal.emit(comicUrl);
  }
}
