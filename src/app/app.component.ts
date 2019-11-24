import { Component } from '@angular/core';
import { UsersService } from './users-list/users.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title = 'user-list-app';
  public filterOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'All', value: 'all'}
  ]

  constructor(private usersService: UsersService) { }

  public onSelectionChange(filter: MatSelectChange) {
    this.usersService.selectedFilter.emit(filter);
  }


}


