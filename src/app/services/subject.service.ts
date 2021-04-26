import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  userInfo = new BehaviorSubject<any>(null);
  constructor() { }
}
