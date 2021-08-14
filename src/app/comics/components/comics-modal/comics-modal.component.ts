import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComicId } from '../../models/comics.interface';

@Component({
  selector: 'app-comics-modal',
  templateUrl: './comics-modal.component.html',
  styleUrls: ['./comics-modal.component.css'],
})
export class ComicsModalComponent implements OnInit {
  @Input() comic!: ComicId;
  @Output() closeModal = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.comic);
  }
  close() {
    this.closeModal.emit();
  }
}
