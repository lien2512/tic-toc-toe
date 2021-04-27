import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from '../page/login/login.component';
import { DashboardComponent } from '../page/dashboard/dashboard.component';
import { GameboardComponent } from '../page/gameboard/gameboard.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: MainComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: '', component: DashboardComponent},
        {path: 'play/:name', component: GameboardComponent},
        {path: 'play/new/:id', component: GameboardComponent}
      ]
    }])
  ]
})
export class LayoutModule { }
