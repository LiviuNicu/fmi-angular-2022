import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[] = [
    {
      name: 'Ionel',
      age: 28
    },
    {
      name: 'Ana',
      age: 22
    },
    {
      name: 'Laura',
      age: 10
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
  }

}
