import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RouteGuard } from './route.guard';

describe('RouteGuard', () => {
  let guard: RouteGuard;
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/login'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}
  let location: Location

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RouteGuard, { provide: Router, useValue: routerMock },],
    });
    guard = TestBed.inject(RouteGuard);
    location = TestBed.inject(Location)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect an unauthenticated user to the login route', () => {
    const spy = spyOn(guard, 'canActivate').and.returnValue(false);
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

});
