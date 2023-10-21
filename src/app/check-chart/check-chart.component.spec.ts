import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckChartComponent } from './check-chart.component';

describe('CheckChartComponent', () => {
  let component: CheckChartComponent;
  let fixture: ComponentFixture<CheckChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckChartComponent]
    });
    fixture = TestBed.createComponent(CheckChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
