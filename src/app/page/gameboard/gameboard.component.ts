import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
})
export class GameboardComponent implements OnInit {
  listSquare: any = [];
  boadSize = 100;
  listSquares: any = new Array();
  titleHeaderHistory: any = [];
  constructor(
    public gameService: GameService
  ) {}

  ngOnInit(): void {
    this.gameService.newGame();
    this.titleHeaderHistory = ['Player', 'Position', 'Move created'];
  }
  
}
