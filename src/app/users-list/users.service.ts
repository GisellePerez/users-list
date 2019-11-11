import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = []; // tipar

  constructor(public http: HttpClient) { }

  public fetchUsers(): Observable<any> { // tipar
    return this.http.get('https://randomuser.me/api/?results=50')
    // .pipe(
    //   map((data: any) => {
    //     return data.json().results.map((item: any) => {
    //       // const model = new User();
    //       // Object.assign(model, item);
    //       return new User(
    //         item.gender,
    //         item.name,
    //         item.age,
    //         item.email,
    //         item.city,
    //         item.state,
    //         item.country,
    //         item.phone,
    //         item.picture,
    //         item.location,
    //         item.description,
    //         item.ocupation
    //       )

    //     })
    //   })
    // )
    
  }

  public getUsers() {
    return this.users;
  }

  public filterUsers(option): Observable<any> {
    console.log(option);
    return of(this.users);
  }

}
