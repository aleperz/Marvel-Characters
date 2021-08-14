import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMoreComponent } from './components/button-more/button-more.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';

@NgModule({
  declarations: [ButtonMoreComponent, TitleSectionComponent],
  exports: [ButtonMoreComponent],
  imports: [CommonModule],
})
export class SharedModule {}
