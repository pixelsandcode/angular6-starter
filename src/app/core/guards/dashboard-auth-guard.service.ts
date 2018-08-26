import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
// import { AuthService } from './guards.service';

@Injectable()
export class DashboardAuthGuard implements CanLoad {
  constructor(
    // public guardsService: AuthService,
    public router: Router,
  ) {
  }
  canLoad() {
  //   if (
  //     this.guardsService.isLoggedIn() &&
  //     this.guardsService.scope() === 'shop'
  //   ) {
  //     this.router.navigate(['/dashboard']);
  //     return false;
  //   }
    return true;
  }
}
