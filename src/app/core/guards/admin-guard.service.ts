import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
// import { AuthService } from './guards.service';

@Injectable()
export class AdminGuard implements CanLoad {
  constructor(
    // public guardsService: AuthService,
    public router: Router) {
  }

  canLoad() {
    return true;
  }
}
