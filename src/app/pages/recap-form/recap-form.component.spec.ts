import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapFormComponent } from './recap-form.component';

describe('RecapFormComponent', () => {
  let component: RecapFormComponent;
  let fixture: ComponentFixture<RecapFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecapFormComponent]
    });
    fixture = TestBed.createComponent(RecapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
