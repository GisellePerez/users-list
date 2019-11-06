import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user; // tipar
  @Output() selectedUser: EventEmitter<any> = new EventEmitter<any>(); // tipar

  constructor() { }

  ngOnInit() {
    // console.log(this.user)
  }

}
