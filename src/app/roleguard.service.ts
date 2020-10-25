import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate {
  rola = null;
  constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    this.rola = localStorage.getItem('rola');
    if
      (this.rola == 'bibliotekar' || this.rola == 'menadzer')
      return true;
    else {
      alert('Pristup zadatom linku je dozvoljen isključivo bibliotekrima i menadžerima.')
      this.router.navigate(['/login']);
    }
  }
}
