import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsModalComponent } from './components/comics-modal/comics-modal.component';
import { FavoritesSidebarComponent } from './components/favorites-sidebar/favorites-sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteComicCardComponent } from './components/favorite-comic-card/favorite-comic-card.component';

@NgModule({
  declarations: [
    ComicsModalComponent,
    FavoritesSidebarComponent,
    FavoriteComicCardComponent,
  ],
  exports: [FavoritesSidebarComponent, ComicsModalComponent],
  imports: [CommonModule, SharedModule],
})
export class ComicsModule {}
