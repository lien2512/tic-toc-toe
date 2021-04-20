import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: any = new Array();
  activePlayer: string = 'X';
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;
  size = 10;
  constructor() { }
  newGame() {
    this.activePlayer = 'X';
    this.isGameRunning = false;
    this.isGameOver = false;
    this.winner = false;
    this.board = this.createBoardGames();
  }
  createBoardGames() {
    for (let i = 0; i < this.size; i++) {
      this.board[i] = new Array();
      for (let j = 0; j < this.size; j++) {
        const a = { id: i + '-' + j, state: null };
        this.board[i][j] = a;
      }
    }

    return this.board;
  }
  changePlayerTurn() {

  }
  updateBoard(squareClicked) {
    let arrayHash = squareClicked.id.split('-');
    this.board[parseInt(arrayHash[0])][parseInt(arrayHash[1])].state = squareClicked.state
  }

}
