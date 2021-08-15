import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CharactersModule } from '../characters/characters.module';
import { ComicsModule } from '../comics/comics.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainContentComponent],
  exports: [FooterComponent, HeaderComponent, MainContentComponent],
  imports: [CommonModule, CharactersModule, ComicsModule, SharedModule],
})
export class CoreModule {}
