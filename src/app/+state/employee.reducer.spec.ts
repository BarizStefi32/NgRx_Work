import * as fromReducer from './employee.reducer';
import * as fromActions from './employee.actions';
import { Employee } from '../interfaces/employee';

describe('Test Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'unknown' };

    const result = fromReducer.employeeReducer(
      fromReducer.initialState,
      action
    );

    expect(result).toEqual(fromReducer.initialState);
  });

  it('should add an employee', () => {
    const payload: Employee = {
      firstName: 'Bariz',
      surname: 'Stefania',
      age: '18-25 years',
    };
    const action = fromActions.addEmployee({ employee: payload });
    const newState: fromReducer.EmployeeState = {
      employees: [
        { firstName: 'Bariz', surname: 'Stefania', age: '18-25 years' },
      ],
    };

    const result = fromReducer.reducer(fromReducer.initialState,action);

    expect(result).toEqual(newState);

  });
});
