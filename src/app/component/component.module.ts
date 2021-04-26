import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { SquareComponent } from './square/square.component';
import { PopupconfirmComponent } from './popupconfirm/popupconfirm.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SquareComponent, PopupconfirmComponent,
    PopupconfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [TableComponent,
    SquareComponent,
    PopupconfirmComponent]
})
export class ComponentModule { }
