import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixToDoComponent } from './choix-to-do.component';

describe('ChoixToDoComponent', () => {
  let component: ChoixToDoComponent;
  let fixture: ComponentFixture<ChoixToDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixToDoComponent]
    });
    fixture = TestBed.createComponent(ChoixToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
