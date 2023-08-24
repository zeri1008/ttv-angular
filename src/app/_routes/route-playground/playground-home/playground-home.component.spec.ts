import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundHomeComponent } from './playground-home.component';

describe('PlaygroundHomeComponent', () => {
  let component: PlaygroundHomeComponent;
  let fixture: ComponentFixture<PlaygroundHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
