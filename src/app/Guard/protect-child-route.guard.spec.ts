import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { protectChildRouteGuard } from './protect-child-route.guard';

describe('protectChildRouteGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protectChildRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
