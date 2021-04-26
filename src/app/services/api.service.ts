import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }
  login(data) {
    const url = `${environment.apiURL}login`;
    return this.httpClient.post(url, data);
  }
  createGame(data: any) {
    const url = `${environment.apiURL}game/new`;
    return this.httpClient.post(url, data);
  }
  signUp(data) {
    const url = `${environment.apiURL}registration`;
    return this.httpClient.post(url, data);
  }
}
