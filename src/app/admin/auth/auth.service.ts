import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AuthHttp } from 'angular2-jwt';
import _ from 'lodash';

@Injectable()
export class AuthService {
  credentials;
  constructor(
    private http: HttpClient
  ) {
  }

  onAdminLogin(credentials) {
    this.credentials = _.pick(credentials, ['email', 'password', 'remember']);
    return this.http.post(
      'v1/admin/login',
      JSON.stringify(this.credentials),
    );
  }

}
