import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
  }
userEnteredEmail = '';
userEnteredPassword = '';

  onSubmission(form:NgForm){
    console.log(form);
    this.userEnteredEmail = form.value.email;
    this.userEnteredPassword = form.value.password;

    this.authService.userEmail = this.userEnteredEmail;
    this.authService.userPassword = this.userEnteredPassword;

    this.authService.login()
    .subscribe(data => this.authService.token= data);
    alert("Login Successful..!!")

    console.log('user has entered email as '+ this.userEnteredEmail);
    console.log('user has entered password as '+ this.userEnteredPassword);
  }
}
