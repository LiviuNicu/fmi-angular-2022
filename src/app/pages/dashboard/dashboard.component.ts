import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { MainService } from 'src/app/services/main.service';

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
  ];

  allUsers: any[] = [];

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.mainService.getAllUsers().subscribe((res) => {
      this.allUsers = res;
    })
  }

  goToUser(id: string) {
    this.router.navigate(['user/' + id]);
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
  }

}
