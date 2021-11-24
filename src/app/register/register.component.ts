import { Component, OnInit } from '@angular/core';
import { Age } from '../interfaces/age';
import { EmployeeState } from '../reducers/employee.reducer';
import { Store } from '@ngrx/store';
import * as EmployeeActions from '../actions/employee.actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  ages: Age[] = [
    { value: 'age-0', viewValue: '18-25 years' },
    { value: 'age-1', viewValue: '26-37 years' },
    { value: 'age-2', viewValue: '38-50 years' },
  ];

  constructor(private store: Store<EmployeeState>) {}

  addEmployee(
    employeeFirstName: string,
    employeeSurname: string,
    employeeAge: string
  ): void {
    //const employee = new employeeModel(employeeFirstName,employeeSurname,employeeAge);

    const employee = {
      firstName: employeeFirstName,
      surname: employeeSurname,
      age: employeeAge,
    };

    this.store.dispatch(EmployeeActions.addEmployee({ employee: employee }));
  }

  ngOnInit(): void {}
}
