import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './guards.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    // public guardsService: AuthService,
    public router: Router) {
  }

  canActivate() {
    return true;
  }
}
