import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {}
  token: any;

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token');
    if (this.token) {
      req = req.clone({
        url: this.prepareUrl(req.url),
        setHeaders: {
          enctype: 'multipart/form-data',
          authorization: this.token,
          // "Content-Type": "application/json",
          'x-token': this.token,
        },
      });
    } else {
      req = req.clone({
        url: this.prepareUrl(req.url),
      });
    }
    return next.handle(req);
  }
  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }
  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : environment.apiUrl + url;
    return url;
  }
  public isAuthenticated() {
    return this.token != null;
  }
}
