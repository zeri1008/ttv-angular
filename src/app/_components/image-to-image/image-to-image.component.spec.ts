import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToImageComponent } from './image-to-image.component';

describe('ImageToImageComponent', () => {
  let component: ImageToImageComponent;
  let fixture: ComponentFixture<ImageToImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageToImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
