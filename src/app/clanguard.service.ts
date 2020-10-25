import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClanguardService implements CanActivate {
  user = null;
  constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {

      this.user = localStorage.getItem('rola');
       if
        (this.user == 'clan')
          return true;
        else {
          alert('Morate biti ulogovani kao član da biste pristupili traženom linku.')
          this.router.navigate(['/login']);
       }
    }
}
