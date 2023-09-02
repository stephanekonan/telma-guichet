import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectoVersoPieceComponent } from './recto-verso-piece.component';

describe('RectoVersoPieceComponent', () => {
  let component: RectoVersoPieceComponent;
  let fixture: ComponentFixture<RectoVersoPieceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectoVersoPieceComponent]
    });
    fixture = TestBed.createComponent(RectoVersoPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
