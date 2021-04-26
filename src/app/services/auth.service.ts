import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookie: CookieService,
    private subjectService: SubjectService,
    private router: Router
  ) { }
  logout() {
    this.cookie.delete('token', '/');
    this.cookie.delete('user_info', '/');
    this.subjectService.userInfo.next(null);
    this.router.navigate(['']);

  }
}
