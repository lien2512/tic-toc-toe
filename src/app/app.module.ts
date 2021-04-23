import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { GameboardComponent } from './page/gameboard/gameboard.component';
import { HeaderComponent } from './component/header/header.component';
import { TableComponent } from './component/table/table.component';
import { MainComponent } from './layout/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquareComponent } from './component/square/square.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GameboardComponent,
    HeaderComponent,
    TableComponent,
    SquareComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
