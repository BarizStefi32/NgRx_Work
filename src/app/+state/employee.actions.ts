import { Employee } from '../interfaces/employee';
import { employeeModel } from '../models/employeeModel';
import {createAction,props} from '@ngrx/store';


export const addEmployee = createAction(

    '[Employee] Add Employee',
     props<{employee:employeeModel}>()

  );


