import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRemoveComponent } from './book-remove.component';

describe('BookRemoveComponent', () => {
  let component: BookRemoveComponent;
  let fixture: ComponentFixture<BookRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
