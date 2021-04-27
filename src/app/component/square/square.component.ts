import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() square: any;
  gameId: any;
  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.gameId = res.id
    })
  }
  changePlayer(){
    // this.gameService.isGameRunning = true;
    if (this.gameService.isGameRunning && this.square.state == null) {
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square, this.gameId);
    }
  }

}
