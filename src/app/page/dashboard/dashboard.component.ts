import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GameService } from 'src/app/services/game.service';

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
    private apiService: ApiService,
    private gameService: GameService
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
      this.gameService.gameType = this.gameType;
      this.gameService.activePlayer = this.playAs;
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
        this.apiService.createGame(dataGame).subscribe((res: any) =>{
          if (res.firstPlayerId) {
            this.router.navigate(['/new', {queryParams: {id: res.id}}]);
          }
        })
      }
      
    }
    
  }

}
