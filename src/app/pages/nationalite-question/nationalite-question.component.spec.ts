import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationaliteQuestionComponent } from './nationalite-question.component';

describe('NationaliteQuestionComponent', () => {
  let component: NationaliteQuestionComponent;
  let fixture: ComponentFixture<NationaliteQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationaliteQuestionComponent]
    });
    fixture = TestBed.createComponent(NationaliteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
