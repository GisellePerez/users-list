import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = []; // tipar

  constructor(public http: HttpClient) { }

  public fetchUsers(): Observable<any> { // tipar
    return this.http.get('https://randomuser.me/api/?results=50');
  }

  public filterUsers(option): Observable<any> {
    console.log(option);
    return of(this.users);
  }

}
