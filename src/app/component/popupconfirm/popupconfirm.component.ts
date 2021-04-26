import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popupconfirm',
  templateUrl: './popupconfirm.component.html',
  styleUrls: ['./popupconfirm.component.scss']
})
export class PopupconfirmComponent implements OnInit {
  @Input() confirmTitle: any = null;
  @Input() confirmText: any = null;
  @Input() textDetail: any = null;
  @Input() okeButton: any = null;
  @Input() cancelButton: any = null;
  @Output() onConfirm = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  confirm() {
    this.onConfirm.emit();
  }
  cancel() {
    this.onCancel.emit();
  }

}
