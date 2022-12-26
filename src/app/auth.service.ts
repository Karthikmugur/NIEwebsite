import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token:any;

  userEmail:any;
  userPassword:any;

  login(){
    const modal={
      "email": this.userEmail,
      "password": this.userPassword}
   return this.http.post('https://reqres.in/api/users', modal)
  
  }

}
