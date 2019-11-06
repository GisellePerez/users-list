import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = []; // tipar

  constructor(public http: HttpClient) { }

  fetchUsers(): Observable<any> { // tipar
    return this.http.get('https://randomuser.me/api/?results=50');
  }
}
