import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User; // tipar
  @Input() selectedUser: User = null;

  constructor() { }

  ngOnInit() {
  }

}
