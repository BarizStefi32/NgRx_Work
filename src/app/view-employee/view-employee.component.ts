import { selectEmployees } from './../selectors/employee.selector';
import { Employee } from './../interfaces/employee';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import { EmployeeState } from '../reducers/employee.reducer';
import * as EmployeeSelector from '../selectors/employee.selector';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employees$ = this.store.pipe(select(EmployeeSelector.selectEmployees));

  constructor(private store: Store<EmployeeState>) {}

  ngOnInit(): void {

    this.employees$.subscribe(data=> console.log(data));
  }

}
