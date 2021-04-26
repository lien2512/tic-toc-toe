import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';  
import { PopupconfirmComponent } from 'src/app/component/popupconfirm/popupconfirm.component';

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
  modalConfirm: BsModalRef
  constructor(
    public gameService: GameService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.gameService.newGame();
    this.titleHeaderHistory = ['Player', 'Position', 'Move created'];
  }
  reset() {
    if (!this.gameService.isWin) {
      this.modalConfirm = this.modalService.show(PopupconfirmComponent, {
        class: 'modal-default',
        initialState: {
          confirmTitle : 'Chơi lại',
          confirmText: 'Bạn chắc chắn muốn chơi lại ?',
          okeButton: 'Đồng ý',
          cancelButton: 'Huỷ'
        }
      })    
      this.modalConfirm.content.onCancel.subscribe(() => {
        this.modalConfirm.hide();
    });
    this.modalConfirm.content.onConfirm.subscribe(() => {
      this.modalConfirm.hide();
    this.gameService.newGame();
    })
  } else {
    this.gameService.newGame();
  }
  }
  
}
