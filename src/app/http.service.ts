import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  getUserListFromAPI(){
    return this.http.get('https://reqres.in/api/users?page=1')
  }

  signUpFormDetail(data:any){
    return this.http.post('https://reqres.in/api/users', data)
  }

  LoginFormDetail(data:any){
    return this.http.post('https://reqres.in/api/users', data)
  }

}
