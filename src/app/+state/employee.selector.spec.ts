import * as fromReducer from './employee.reducer';
import * as fromSelector from './employee.selector';

describe('Test Selector', () => {
  it('should return employees', () => {

    const initialState : fromReducer.EmployeeState = {
      employees: [
        { firstName: 'Bariz', surname: 'Stefania', age: '18-25 years'},
        { firstName: 'Popescu', surname: 'Ion', age: '26-37 years'}
      ]
    };

    const result = fromSelector.selectEmployees.projector(initialState);

    expect(result).toEqual(initialState.employees);

    expect(result[0].surname).toEqual('Stefania');

    expect(result.length).toEqual(2);


  });
});
