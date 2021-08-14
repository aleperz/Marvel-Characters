import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsModalComponent } from './comics-modal.component';

describe('ComicsModalComponent', () => {
  let component: ComicsModalComponent;
  let fixture: ComponentFixture<ComicsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
