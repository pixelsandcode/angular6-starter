import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messenger: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => {
            ok = event instanceof HttpResponse ? 'succeeded' : '';
            if (ok) {
              const res = event;
              // @ts-ignore
              const token = res.headers.get('authorization');
              console.log(1, token);
              if (token) {
                localStorage.setItem('access_token', token);
               }
              }
            },
          // Operation failed; error is an HttpErrorResponse
          error => {
            ok = 'failed';
            localStorage.clear();
          }
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
          this.messenger.add(msg);
        })
      );
  }
}
