import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsModalComponent } from './components/comics-modal/comics-modal.component';
import { FavoritesSidebarComponent } from './components/favorites-sidebar/favorites-sidebar.component';

@NgModule({
  declarations: [ComicsModalComponent, FavoritesSidebarComponent],
  exports: [FavoritesSidebarComponent, ComicsModalComponent],
  imports: [CommonModule],
})
export class ComicsModule {}
