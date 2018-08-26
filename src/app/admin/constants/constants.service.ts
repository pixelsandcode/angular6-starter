import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(private http: HttpClient) { }

  getList(options) {

    options = _.defaults(options, { page: 1, size: 20 });
    const _params = {};
    Object.keys(options).forEach(key => {
      _params[`${key}`] = options[key];
    });
    return this.http.get<any>('v1/admin/shops', { params: _params });
  }
}
