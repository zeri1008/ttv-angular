import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToImageComponent } from './text-to-image.component';

describe('TextToImageComponent', () => {
  let component: TextToImageComponent;
  let fixture: ComponentFixture<TextToImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
