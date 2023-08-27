import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslanguageComponent } from './islanguage.component';

describe('IslanguageComponent', () => {
  let component: IslanguageComponent;
  let fixture: ComponentFixture<IslanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
