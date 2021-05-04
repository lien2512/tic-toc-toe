import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo: any;
  constructor(
    private router: Router,
    private subjectService: SubjectService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.subjectService.userInfo.subscribe((res: any) => {
      this.userInfo = res;
      if (!this.userInfo && this.cookie.get('user_info')) {
        this.userInfo = JSON.parse(this.cookie.get('user_info'));
      }
    })
  }
  login() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.cookie.delete('user_info', '/');
    this.subjectService.userInfo.next(null);
  }

}
