import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMoreComponent } from './components/button-more/button-more.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { ModalButtonComponent } from './components/modal-button/modal-button.component';

@NgModule({
  declarations: [
    ButtonMoreComponent,
    TitleSectionComponent,
    ModalButtonComponent,
  ],
  exports: [ButtonMoreComponent, ModalButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
