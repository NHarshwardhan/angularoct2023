import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSComponent } from './book-s.component';

describe('BookSComponent', () => {
  let component: BookSComponent;
  let fixture: ComponentFixture<BookSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookSComponent]
    });
    fixture = TestBed.createComponent(BookSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
