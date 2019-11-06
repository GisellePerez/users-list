import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Output() selectedUser: EventEmitter<any> = new EventEmitter();

  public users = [];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.fetchUsers().subscribe((response) => {
      console.log(response);
      this.users = response.results;
    });
  }

  public onSelectedUser(user) { // tipar
    console.log(user);
    this.selectedUser = user;
  }

}
