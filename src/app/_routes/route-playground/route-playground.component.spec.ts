import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePlaygroundComponent } from './route-playground.component';

describe('RoutePlaygroundComponent', () => {
  let component: RoutePlaygroundComponent;
  let fixture: ComponentFixture<RoutePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutePlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
