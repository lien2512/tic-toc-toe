import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
titleHeaderExistGame: any = [];
  titleHeaderMyGame: any = [];
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.titleHeaderExistGame = [
      'Started player', 'Game status', 'Created', 'Action'
    ]
    this.titleHeaderMyGame = ['Started player', 'Second player', 'Status', 'Created', 'Action']
  }
  navigateGameBoard() {
    this.router.navigate(['/play']);
  }

}
