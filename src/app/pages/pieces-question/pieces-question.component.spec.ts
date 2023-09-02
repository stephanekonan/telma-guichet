import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesQuestionComponent } from './pieces-question.component';

describe('PiecesQuestionComponent', () => {
  let component: PiecesQuestionComponent;
  let fixture: ComponentFixture<PiecesQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiecesQuestionComponent]
    });
    fixture = TestBed.createComponent(PiecesQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
