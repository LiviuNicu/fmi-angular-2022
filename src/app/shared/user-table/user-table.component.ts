import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() allUsers: User[] = [];
  @Output() onRemoveUser = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  removeUser(index: number) {
    this.onRemoveUser.emit(index);
  }

}
