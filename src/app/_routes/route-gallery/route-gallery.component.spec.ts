import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGalleryComponent } from './route-gallery.component';

describe('RouteGalleryComponent', () => {
  let component: RouteGalleryComponent;
  let fixture: ComponentFixture<RouteGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
