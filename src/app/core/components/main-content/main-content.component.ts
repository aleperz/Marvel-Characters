import { Component, OnInit } from '@angular/core'
import { Character, ComicsItem } from 'src/app/characters/models/character.interface'
import { MarvelCharactersService } from 'src/app/characters/services/marvel-characters.service'
import { ComicId } from 'src/app/comics/models/comics.interface'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  comicsArray: ComicsItem[] = []
  randomComics: ComicsItem[] = []
  comicsRandomDetail: ComicId[] = []

  constructor(private marvelService: MarvelCharactersService) {}

  ngOnInit(): void {}

  characterReceived(characters: Character[]) {
    for (const char of characters) {
      this.comicsArray.push(...char.comics.items)
    }

    for (let i = 0; i <= 2; i++) {
      const n = Math.floor(Math.random() * this.comicsArray.length + 1)
      this.randomComics.push(this.comicsArray[n])
      this.comicsArray.splice(n, 1)
    }
    this.randomComics.forEach((comic) => {
      this.marvelService.getComic(comic.resourceURI).subscribe((comicInfo) => {
        this.comicsRandomDetail.push(comicInfo.data.results[0])
      })
    })
  }
}
