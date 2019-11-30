import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }
    return next.handle(req);
  }
}
