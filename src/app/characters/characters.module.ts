import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PageDropdownComponent } from './components/page-dropdown/page-dropdown.component';
import { SortDropdownComponent } from './components/sort-dropdown/sort-dropdown.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ComicsModule } from '../comics/comics.module';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailComponent,
    PageDropdownComponent,
    SortDropdownComponent,
    SearchBarComponent,
  ],
  exports: [
    CharactersListComponent,
    CharacterDetailComponent,
    PageDropdownComponent,
    SortDropdownComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, SharedModule, ComicsModule],
})
export class CharactersModule {}
