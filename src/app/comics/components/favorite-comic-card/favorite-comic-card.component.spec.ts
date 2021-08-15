import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComicCardComponent } from './favorite-comic-card.component';

describe('FavoriteComicCardComponent', () => {
  let component: FavoriteComicCardComponent;
  let fixture: ComponentFixture<FavoriteComicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteComicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
