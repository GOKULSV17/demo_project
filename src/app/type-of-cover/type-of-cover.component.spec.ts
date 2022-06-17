import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfCoverComponent } from './type-of-cover.component';

describe('TypeOfCoverComponent', () => {
  let component: TypeOfCoverComponent;
  let fixture: ComponentFixture<TypeOfCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
