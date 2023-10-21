import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressUserInfoComponent } from './address-user-info.component';

describe('AddressUserInfoComponent', () => {
  let component: AddressUserInfoComponent;
  let fixture: ComponentFixture<AddressUserInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressUserInfoComponent]
    });
    fixture = TestBed.createComponent(AddressUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
