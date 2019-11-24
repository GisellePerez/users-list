import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.interface';
import { pluck } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output() selectedFilter: EventEmitter<MatSelectChange>;

  constructor(public http: HttpClient) { 
    this.selectedFilter = new EventEmitter();
  }

  public fetchUsers(): Observable<User[]> { 
    return this.http.get<User[]>('https://randomuser.me/api/?results=50').pipe(
      pluck('results')
    );
  }

  
}
