import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSidebarComponent } from './favorites-sidebar.component';

describe('FavoritesSidebarComponent', () => {
  let component: FavoritesSidebarComponent;
  let fixture: ComponentFixture<FavoritesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
