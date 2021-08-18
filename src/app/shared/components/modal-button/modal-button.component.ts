import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent implements OnInit {
  @Input() urlImg = ''
  @Input() text = ''
  @Input() type = ''
  @Input() urlPurchase = ''
  @Output() addToFavorite = new EventEmitter<void>()

  constructor() {}

  ngOnInit(): void {}

  addFavorite() {
    this.addToFavorite.emit()
  }
  buyComic() {
    console.log('comprar comic')
  }
}
