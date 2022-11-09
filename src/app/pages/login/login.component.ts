import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/interfaces/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isDisabled: boolean = true;
  public user: LoginDTO = {
    email: 'eeee',
    password: '',
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 1000)
  }

  doLogin() {
    console.log(this.user);
  }

}
