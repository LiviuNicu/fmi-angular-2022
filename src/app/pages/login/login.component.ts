import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  };
  public error: string | boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 1000)
  }

  doLogin() {
    this.error = false;
    if (this.user.email && this.user.password) {
      if (this.validateEmail(this.user.email)) {
        this.router.navigate(['dashboard']);
      } else {
        this.error = 'invalid email';
      }
    } else {
      this.error = 'email and passowrd are required';
    }
  }

  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

}
