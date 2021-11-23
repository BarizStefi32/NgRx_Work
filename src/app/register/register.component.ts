import { Component, OnInit } from '@angular/core';
import { Age } from '../interfaces/age';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  ages: Age[] = [
    {value: 'age-0', viewValue: '18-25 years'},
    {value: 'age-1', viewValue: '26-37 years'},
    {value: 'age-2', viewValue: '38-50 years'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
