import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login() {
    this.router.navigate(['/login']);
  }

}
