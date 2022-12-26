import { Component, OnInit } from '@angular/core';
import { DataaService } from '../dataa.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public Data:DataaService) { }

  ngOnInit(): void {
  }
CourseDetails = [
  {'Course': 'B.tech in CSE', 'Intake': 120, 'GovtSeats': 70, 'Fees': 65000, 'InternationalStudentsFees': 800,
    'StartDate': '08/07/2023'},
    {'Course': 'B.tech in ECE', 'Intake': 110, 'GovtSeats': 65, 'Fees': 62000, 'InternationalStudentsFees': 780,
    'StartDate': '08/07/2023'},
    {'Course': 'B.tech in ME', 'Intake': 140, 'GovtSeats': 80, 'Fees': 62000, 'InternationalStudentsFees': 770,
    'StartDate': '08/07/2023'},
    {'Course': 'B.tech in CE', 'Intake': 150, 'GovtSeats': 110, 'Fees': 57000, 'InternationalStudentsFees': 700,
    'StartDate': '08/07/2023'},
    {'Course': 'B.tech in ISE', 'Intake': 80, 'GovtSeats': 60, 'Fees': 52000, 'InternationalStudentsFees': 670,
    'StartDate': '08/14/2023'},
    {'Course': 'B.tech in IT', 'Intake': 60, 'GovtSeats': 50, 'Fees': 58000, 'InternationalStudentsFees': 680,
    'StartDate': '08/14/2023'},
    {'Course': 'B.tech in AE', 'Intake': 50, 'GovtSeats': 40, 'Fees': 70000, 'InternationalStudentsFees': 820,
    'StartDate': '08/28/2023'}
]
}
