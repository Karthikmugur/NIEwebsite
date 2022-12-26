import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

 signUpForm:FormGroup = new FormGroup({
  email: new FormControl(null, Validators.required),
  password: new FormControl(null, [Validators.maxLength(12), Validators.minLength(8), Validators.required]),
  mobile: new FormControl(null, [Validators.pattern('[6-9][0-9]{9}'), Validators.required]),
  dob: new FormControl(null)
 });


 onSubmission(){
  this.httpService.signUpFormDetail(this.signUpForm.value).subscribe((result)=>{
    console.log(result);
  alert("Successfully Registered..!!");
  this.signUpForm.reset({});
  });
 }
}
