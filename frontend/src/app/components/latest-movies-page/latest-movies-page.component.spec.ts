import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMoviesPageComponent } from './latest-movies-page.component';

describe('LatestMoviesPageComponent', () => {
  let component: LatestMoviesPageComponent;
  let fixture: ComponentFixture<LatestMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestMoviesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
