import { Action, createReducer, on} from '@ngrx/store';
import * as EmployeeActions from '../actions/employee.actions';
import { Employee } from '../interfaces/employee';

export const EmployeeKey = 'employee';

export interface EmployeeState{

  employees:Employee[];
}


export const initialState: EmployeeState = {

  employees: []

};

export const employeeReducer = createReducer(

  initialState,
  on(EmployeeActions.addEmployee,
    (state:EmployeeState, {employee})=>
    ({...state,
    employees:[...state.employees,employee]
  }))
);

export function reducer(state:EmployeeState, action:Action){
  return employeeReducer(state,action);
}

