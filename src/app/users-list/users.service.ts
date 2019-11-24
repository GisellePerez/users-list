import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.interface';
import { MatSelectChange } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output() selectedFilter: EventEmitter<MatSelectChange>;

  constructor(public http: HttpClient) { 
    this.selectedFilter = new EventEmitter();
  }

  public fetchUsers(): Observable<any> { 
    return this.http.get('https://randomuser.me/api/?results=50');
  }

  
}
