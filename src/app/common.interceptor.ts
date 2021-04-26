import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HelperService } from './services/helper.service';
import { AuthService } from './services/auth.service';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  private runIn: boolean = false;
  constructor(
    private cookie: CookieService,
    private helperService: HelperService,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.cookie.get('token');
    let headers: any;
    let headerData = {
      Authorization: ''
    }
    if (accessToken) {
      const authdata = 'Bearer ' + accessToken;
      headerData.Authorization = authdata;
    }
    headers = new HttpHeaders(headerData);
    return next.handle(request.clone({headers}));
    // return next.handle(request.clone({
    //   headers
    // })).do((event: HttpEvent<any>) => {

    //   const body: any = event['body'];
    //   if (body) {
    //     if (body.code === 401 && !this.runIn) {
    //       alert('error')
    //       this.authService.logout();
    //       this.runIn = true;
    //       return;
    //     } 
    //     this.runIn = false; 
    //   }
    // }, (err: any) => {
    // });
  }
}
