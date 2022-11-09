import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public myForm!: FormGroup;
  constructor(
    private router: Router,
    private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fromBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  doRegister() {
    console.log(this.myForm);
  }

}
