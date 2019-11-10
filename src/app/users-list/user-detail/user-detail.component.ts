import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() selectedUser = null;

  constructor() { }

  ngOnInit() {
    console.log(this.selectedUser);
  }

}
