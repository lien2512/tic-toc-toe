import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
titleHeaderExistGame: any = [];
  titleHeaderMyGame: any = [];
  gameType: any;
  playAs: any;
  name: any;
  errorText: any;
  constructor(
    private router : Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.titleHeaderExistGame = [
      'Started player', 'Game status', 'Created', 'Action'
    ]
    this.titleHeaderMyGame = ['Started player', 'Second player', 'Status', 'Created', 'Action']
  }
  changeGame() {
    debugger;
    if (this.gameType && this.playAs) {
      this.errorText = null;
  }
  }
  navigateGameBoard() {
    if (!this.gameType || !this.playAs) {
        this.errorText = 'Vui lòng chọn game';
        return;
    } else {
      switch (this.gameType) {
        case 'offline': 
        this.router.navigate(['/play', this.gameType]);
        break;
        default:
          let dataGame = {
            firstPlayerId: 2,
            gameType: this.gameType,
            piece: this.playAs
          }
        this.apiService.createGame(JSON.stringify(dataGame)).subscribe(() =>{

        })
      }
      
    }
    
  }

}
