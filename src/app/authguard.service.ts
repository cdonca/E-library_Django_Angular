import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  user = null;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    this.user = localStorage.getItem('id_clana');
    if
      (this.user != null)
      return true;
    else {
      alert('Morate biti ulogovani kako biste pristupili traženom linku.')
      this.router.navigate(['/login']);
    }
   }
}
