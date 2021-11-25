import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromEmployee from './employee.reducer';


export const selectEmployeeState = createFeatureSelector<fromEmployee.EmployeeState>(

  fromEmployee.EmployeeKey,
);


export const selectEmployees = createSelector(

  selectEmployeeState,

  (state: fromEmployee.EmployeeState) => state.employees

);


// const selectEmployees = (state: any) => state.hasOwnProperty('employees') ? state.employees: '';

// export const selectedEmployees = createSelector(
//   selectEmployees,
//   (state: any) => {
//     return state.hasOwnProperty('employees') ? state.employees : '';
//   }
// );
