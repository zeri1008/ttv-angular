import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBoardsComponent } from './route-boards.component';

describe('RouteBoardsComponent', () => {
  let component: RouteBoardsComponent;
  let fixture: ComponentFixture<RouteBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
