import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly router: Router
  ){}

  protected authorize(
    activatedRoute: ActivatedRouteSnapshot,
    activatedState: RouterStateSnapshot): boolean {
      const username = sessionStorage.getItem('username');
      const password = sessionStorage.getItem('username');
      if (!username || !password){
        sessionStorage.setItem('redirectBackUrl', activatedState.url);
        this.router.navigateByUrl('/login');
      }
      return true;
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authorize(route, state);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
