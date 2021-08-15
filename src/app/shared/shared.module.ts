import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMoreComponent } from './components/button-more/button-more.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { ModalButtonComponent } from './components/modal-button/modal-button.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    ButtonMoreComponent,
    TitleSectionComponent,
    ModalButtonComponent,
    PaginationComponent,
  ],
  exports: [ButtonMoreComponent, ModalButtonComponent, PaginationComponent],
  imports: [CommonModule],
})
export class SharedModule {}
