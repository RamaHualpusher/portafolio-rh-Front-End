// auth-interceptor.service.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  private readonly credentialsKey = 'basic_credentials';

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const credentials = localStorage.getItem(this.credentialsKey);

    if (credentials) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Basic ${credentials}`)
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
