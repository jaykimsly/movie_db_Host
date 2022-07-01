import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnViewComponent } from './on-view.component';

describe('OnViewComponent', () => {
  let component: OnViewComponent;
  let fixture: ComponentFixture<OnViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
