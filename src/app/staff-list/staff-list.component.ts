import { Component, OnInit } from '@angular/core';
import { DataaService } from '../dataa.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  constructor(public httpService:HttpService, public Data:DataaService) { }

  response:any;

  ngOnInit(): void {

    //get call
    this.httpService.getUserListFromAPI()
   .subscribe(data => {
    this.response = data;
    console.log(this.response);
   });

  }

}
