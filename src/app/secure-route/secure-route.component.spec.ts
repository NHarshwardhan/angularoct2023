import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureRouteComponent } from './secure-route.component';

describe('SecureRouteComponent', () => {
  let component: SecureRouteComponent;
  let fixture: ComponentFixture<SecureRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecureRouteComponent]
    });
    fixture = TestBed.createComponent(SecureRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
