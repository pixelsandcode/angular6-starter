/* eslint-disable no-param-reassign */
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

  helper;

  constructor() {
    this.helper = new JwtHelperService();
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  isTokenExpired() {
    const token = localStorage.getItem('access_token');
    return this.helper.isTokenExpired(token);
  }

  expirationDate() {
    const token = localStorage.getItem('access_token');
    return this.helper.getTokenExpirationDate(token);
  }

  decodedToken() {
    const token = localStorage.getItem('access_token');
    return this.helper.decodeToken(token);
  }

  isLoggedIn() {
    return !this.isTokenExpired();
  }

  scope() {
    let decoded;
    const token = localStorage.getItem('access_token');
    try {
      decoded = this.helper.decodeToken(token);
    } catch (e) {
      decoded = { scope: 'guest' };
    }
    return decoded.scope;
  }
}
