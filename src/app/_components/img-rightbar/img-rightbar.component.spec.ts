import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRightbarComponent } from './img-rightbar.component';

describe('ImgRightbarComponent', () => {
  let component: ImgRightbarComponent;
  let fixture: ComponentFixture<ImgRightbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgRightbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
