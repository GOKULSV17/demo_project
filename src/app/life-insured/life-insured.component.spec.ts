import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuredComponent } from './life-insured.component';

describe('LifeInsuredComponent', () => {
  let component: LifeInsuredComponent;
  let fixture: ComponentFixture<LifeInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
