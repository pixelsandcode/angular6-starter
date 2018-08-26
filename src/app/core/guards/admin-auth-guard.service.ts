import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AdminAuthGuard implements CanLoad {
  constructor(
    public guardsService: AuthService,
    public router: Router,
  ) {
  }

  canLoad() {
  //   if (
  //     this.guardsService.isLoggedIn() &&
  //     this.guardsService.scope() === 'admin'
  //   ) {
  //     this.router.navigate(['/admin/analytics']);
  //     return false;
  //   }
    return true;
  }
}
