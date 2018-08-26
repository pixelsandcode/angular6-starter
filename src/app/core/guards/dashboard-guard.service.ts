import { Injectable } from '@angular/core';
import {Router, CanLoad, CanActivate} from '@angular/router';
// import { AuthService } from './guards.service';

@Injectable()
export class DashboardGuard implements CanLoad, CanActivate {
  constructor(
    // public guardsService: AuthService,
    public router: Router,
  ) {
  }
  canLoad() {
    // if (
    //   this.guardsService.isLoggedIn() &&
    //   this.guardsService.scope() === 'shop'
    // ) {
    //   return true;
    // }
    // this.router.navigate(['/dashboard/login']);
    return true;
  }

  canActivate() {
    // if (
    //   this.guardsService.isLoggedIn() &&
    //   this.guardsService.scope() === 'shop'
    // ) {
    //   return true;
    // }
    // this.router.navigate(['/dashboard/login']);
    return true;
  }
}
