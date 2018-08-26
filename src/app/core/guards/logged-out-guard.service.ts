import { Injectable } from '@angular/core';
import {CanLoad, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable()
export class LoggedOutGuard implements CanLoad {
  constructor(
    public authService: AuthService,
    public router: Router,
  ) {
  }

  canLoad() {
    console.log(this.authService.isTokenExpired());
    console.log(this.authService.decodedToken());
    console.log(this.authService.expirationDate());
    console.log(this.authService.scope());
    console.log(this.authService.isLoggedIn());
    return true;
  }
}
