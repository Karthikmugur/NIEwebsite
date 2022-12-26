import { Component, OnInit } from '@angular/core';
import { DataaService } from '../dataa.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public Data:DataaService) { }

  ngOnInit(): void {
  }

  showMoreContents = false;
  btnName = 'Show More'

  toggleContents(){
    this.showMoreContents = !this.showMoreContents;
    if(this.showMoreContents){
      this.btnName = 'Show less';
    }
    else{
      this.btnName = 'Show More';
    }
  }

}
