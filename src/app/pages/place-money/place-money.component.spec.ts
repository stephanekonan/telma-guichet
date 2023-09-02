import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceMoneyComponent } from './place-money.component';

describe('PlaceMoneyComponent', () => {
  let component: PlaceMoneyComponent;
  let fixture: ComponentFixture<PlaceMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceMoneyComponent]
    });
    fixture = TestBed.createComponent(PlaceMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
