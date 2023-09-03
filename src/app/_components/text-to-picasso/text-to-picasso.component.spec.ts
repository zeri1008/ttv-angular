import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToPicassoComponent } from './text-to-picasso.component';

describe('TextToPicassoComponent', () => {
  let component: TextToPicassoComponent;
  let fixture: ComponentFixture<TextToPicassoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToPicassoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToPicassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
