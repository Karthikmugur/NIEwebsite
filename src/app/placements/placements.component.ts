import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
companyDetails = [{
  imagePath: '../../assets/HCL.webp', companyName: 'HCL', intake: 80, package: '3LPA', location: 'Bengaluru'
},
{imagePath: '../../assets/Infosys.jpg', companyName: 'Infosys', intake: 120, package: '3LPA', location: 'Bengaluru'
},
{imagePath: '../../assets/TCS.jpg', companyName: 'TCS', intake: 140, package: '3.5LPA', location: 'Kolkata'
},
{imagePath: '../../assets/Wipro.webp', companyName: 'Wipro', intake: 200, package: '3.6LPA', location: 'Bengaluru'
},
{imagePath: '../../assets/Accenture.webp', companyName: 'Accenture', intake: 80, package: '4.3LPA', location: 'Mumbai'
},
{imagePath: '../../assets/LT.jpg', companyName: 'L & T', intake: 140, package: '3.2LPA', location: 'Chennai'
},
{imagePath: '../../assets/Microsoft.jpg', companyName: 'Microsoft', intake: 120, package: '3.8LPA', location: 'Bengaluru'
},
{imagePath: '../../assets/Cognizant.webp', companyName: 'Cognizant', intake: 70, package: '4.7LPA', location: 'Hyderbad'
}

]

}
