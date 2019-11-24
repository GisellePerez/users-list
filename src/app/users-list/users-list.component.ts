import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { MatSelectChange } from '@angular/material';
import { Subscription } from 'rxjs';
import { User } from './user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  public selectedUser: User = null;
  public users: User[] = [];
  public filteredUsers: User[] = [];

  private subs: Subscription[] = [];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.subs.push(
      this.usersService.fetchUsers().subscribe((response: User[]) => {
        this.users = response;
        this.filteredUsers = this.users;
      }),
  
      this.usersService.selectedFilter.subscribe((filter: MatSelectChange) => {
        if (filter) {
          this.filterUsers(this.users, filter.value)
        }
      })
    )
  }

  public onSelectedUser(event, newSelectedUser: User) {
    this.selectedUser = newSelectedUser;
  }

  /**
   * This method filters users according to selected filter and clears any selected user
   */
  private filterUsers(users: User[], filter: string) {    
    if (filter === 'all') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = users.filter((user) => user.gender === filter);
    }

    if (this.selectedUser) {
      this.selectedUser = null;
    }
  }

  ngOnDestroy() {
    /**
     * This method usubscribes from every subscription when the component destroys
     */
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
