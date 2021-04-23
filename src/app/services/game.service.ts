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
    this.isGameRunning = true;
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
  changePlayerTurn(square) {
    if (!this.isGameOver) {
      this.updateBoard(square);
      this.activePlayer = this.activePlayer === 'X' ? 'O' : 'X';
      this.isGameRunning = true;
      setTimeout(()=> {
        this.checkWin(square);
      }, 0)
    } else {
      return;
    }
  }
  updateBoard(squareClicked) {
    let arrayHash = squareClicked.id.split('-');
    this.board[parseInt(arrayHash[0])][parseInt(arrayHash[1])].state = squareClicked.state
  }
  checkWin(squareClicked) {
    let arrayHash = squareClicked.id.split('-');
    let column = this.board[parseInt(arrayHash[0])];
    let row = this.board.map(x => x[parseInt(arrayHash[1])]);
    if (this.checkRow(row, squareClicked) || this.checkRow(column, squareClicked)) {
      alert('hahahaha');
      this.isGameOver = true;
      this.isGameRunning = false;
    }
  }
  checkArrayHL(arr) {
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i+1] - arr[i] == 1) {
        count ++
        if (count == 4) {
          return true;
        }
      } else {
        return false;
      }
    }
    
  }
  checkRow(arr, squareClicked) {
    let ar = [];
    for (let j = 0; j < arr.length; j ++) {
      if (arr[j].state == squareClicked.state) {
        ar.push(j)
      }
    }
    if ( this.checkArrayHL(ar)) {
      return true;
    }
  }
  checkDiag(squareClicked) {
    let arr = [];
    for (let i = 0; i < this.size; i++)
    {
      for( let j = 0; j < this.size; j ++) {
        
      }
    }
  }
  

}
