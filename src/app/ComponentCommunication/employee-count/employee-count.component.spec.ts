import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCountComponent } from './employee-count.component';

describe('EmployeeCountComponent', () => {
  let component: EmployeeCountComponent;
  let fixture: ComponentFixture<EmployeeCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCountComponent]
    });
    fixture = TestBed.createComponent(EmployeeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
