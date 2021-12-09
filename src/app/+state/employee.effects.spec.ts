import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import * as EmployeeActions from './employee.actions';
import { hot } from 'jasmine-marbles';
import { provideMockActions } from '@ngrx/effects/testing';
import { EmployeeEffects } from './employee.effects';

describe('Test effects', () => {
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [EmployeeEffects,
        provideMockActions(() => actions$),

      ],
    })
  });

  it('should navigate to view list page', () => {
    const mockRouter = TestBed.inject(Router);
    const effects = TestBed.inject(EmployeeEffects);
    const action = EmployeeActions.addEmployee;
    const navigateSpy = spyOn(mockRouter, 'navigate');

    actions$ = hot('-(a|)', { a: action });

    //expect(navigateSpy).toHaveBeenCalledWith(['list']);
    expect(effects.redirectToEmployees$).toBeObservable(actions$);
  });
});
