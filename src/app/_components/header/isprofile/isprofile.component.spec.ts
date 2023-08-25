import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsprofileComponent } from './isprofile.component';

describe('IsprofileComponent', () => {
  let component: IsprofileComponent;
  let fixture: ComponentFixture<IsprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
