import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.css'],
})
export class SortDropdownComponent implements OnInit {
  optionValue: string = '';
  @Output() sortBy = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  optionSelected(event: any) {
    this.optionValue = event.target.value;
    this.sortBy.emit(this.optionValue);
  }
}
