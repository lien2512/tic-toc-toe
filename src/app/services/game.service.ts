import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PopupconfirmComponent } from '../component/popupconfirm/popupconfirm.component';
import { ApiService } from './api.service';
import * as async from "async";
@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: any = new Array();
  activePlayer: string = 'X';
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  isWin: boolean = false;
  winner: any ;
  size = 10;
  gameType: string;
  gameId: any;
  popupModal: BsModalRef
  constructor(
    private modalService: BsModalService,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute

  ) { }
  newGame() {
    this.isGameRunning = true;
    this.isGameOver = false;
    this.isWin = false;
    this.winner = null;
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
  changePlayerTurn(square, id?) {
    if (!this.isGameOver) {
      if (this.gameType == 'offline') {
        this.playOffline(square);
      } else if (this.gameType == 'COMPETITiON'){
        let idSquare = square.id.split('-')
        let data = {
          boardColumn: idSquare[0],
          boardRow: idSquare[1],
          playerId: 2,
          gameId: id
        }
        async.waterfall([
          (cb) => {
            this.apiService.move(data).subscribe((res: any) => {
              
          },(error) => {
            return cb();
          })
          },
          (cb) => {
            this.apiService.createAuto().subscribe((res: any) => {

            },(error) => {
              return cb();
            })
          }
        ])
      }
      
    } else {
      return;
    }
  }
  playOffline(square) {
    this.updateBoard(square);
    this.activePlayer = this.activePlayer === 'X' ? 'O' : 'X';
    this.isGameRunning = true;
    setTimeout(()=> {
      if (this.checkIsWin(square)) {
        this.popupModal = this.modalService.show(PopupconfirmComponent, {
          class: 'modal-default',
          initialState: {
            confirmTitle: 'Winner',
            textDetail: 'Winner is '+ square.state 
          }

        })
        this.popupModal.content.onCancel.subscribe(() => {
          this.popupModal.hide();
      });
        this.winner = square.state + ' win';
        this.isWin = true;
        this.isGameOver = true;
        this.isGameRunning = false;
      } else {
        this.isGameOver = false;
        this.isGameRunning = true;
      }
    }, 0)
  }
  updateBoard(squareClicked) {
    let arrayHash = squareClicked.id.split('-');
    this.board[parseInt(arrayHash[0])][parseInt(arrayHash[1])].state = squareClicked.state
  }
  checkIsWin(squareClicked) {
    debugger;
    let arrayHash = squareClicked.id.split('-');
    const i = parseInt(arrayHash[0]);
    const j = parseInt(arrayHash[1]);

		let count = 0, column = i, row;
		// kiểm tra hàng
		while (this.board[column][j].state == this.board[i][j].state) {
			count++;
			column++;
		}
		column = i >= 1 ? i - 1 : 0;
		while (this.board[column][j].state == this.board[i][j].state) {
			count++;
			column--;
      if (column < 0) {
        break;
      }
		}
		if (count > 4) return true;
		count = 0; row = j;
		// kiểm tra cột
		while(this.board[i][row].state == this.board[i][j].state) {
			count++;
			row++;
		}
		row = j >= 1 ? j - 1 : 0;
		while(this.board[i][row].state == this.board[i][j].state) {
			count++;
      row --;
      if (row < 0) {
        break;
      }	
    }
		if (count > 4) return true;
		// kiểm tra đường chéo 1
		row = i; column = j; count = 0;
		while (this.board[i][j].state == this.board[row][column].state) {
			count++;
			row++;
			column++;
		}
		row = i >= 1 ? i - 1 : 0; column = j >= 1 ?  j - 1 : 0;
		while (this.board[i][j].state == this.board[row][column].state) {
			count++;
			row--;
			column--;
      if (row < 0 || column < 0) {
        break;
      }
		}
		if (count > 4) return true;
		// kiểm tra đường chéo 2
		row = i; column = j; count = 0;
		while (this.board[i][j].state == this.board[row][column].state) {
			count++;
			row++;
			column--;
      if (column < 0) {
        break;
      }
		}
		row =i >= 1 ?  i - 1 : 0; column = j + 1; 
		while (this.board[i][j].state == this.board[row][column].state) {
			count++;
			row--;
			column++;
      if (row < 0 ) {
        break;
      }
		}
		if (count > 4) return true;
		// nếu không đương chéo nào thỏa mãn thì trả về false.
		return false;
	}
  

}
