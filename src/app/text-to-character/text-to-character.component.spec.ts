import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToCharacterComponent } from './text-to-character.component';

describe('TextToCharacterComponent', () => {
  let component: TextToCharacterComponent;
  let fixture: ComponentFixture<TextToCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
