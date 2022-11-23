import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: string = '';
  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
      this.getUserById(this.id);
    })

  }

  getUserById(id: string) {
    this.mainService.getUser(id).subscribe();
  }

}
