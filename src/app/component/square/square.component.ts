import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() square: any;
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }
  changePlayer(){
    // this.gameService.isGameRunning = true;
    if (this.gameService.isGameRunning && this.square.state == null) {
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
    }
  }

}
