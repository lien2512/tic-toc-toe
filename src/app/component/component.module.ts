import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { SquareComponent } from './square/square.component';



@NgModule({
  declarations: [SquareComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent,
    SquareComponent]
})
export class ComponentModule { }
