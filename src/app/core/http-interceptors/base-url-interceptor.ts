import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/services/config/config.service';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  baseUrl: string = null;

  constructor(public configService: ConfigService) {
    this.baseUrl = this.configService.baseUrl;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // clone request and replace 'http://' with 'https://' at the same time
    const completeReq = req.clone({
      url: this.baseUrl + req.url
    });
    return next.handle(completeReq);
  }
}
