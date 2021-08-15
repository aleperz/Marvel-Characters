import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-dropdown',
  templateUrl: './page-dropdown.component.html',
  styleUrls: ['./page-dropdown.component.css'],
})
export class PageDropdownComponent implements OnInit {
  optionValue: string = '';
  @Output() charByPage = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  optionSelected(event: any) {
    this.optionValue = event.target.value;
    this.charByPage.emit(this.optionValue);
  }
}
