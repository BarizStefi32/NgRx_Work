import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as EmployeeActions from './employee.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()

export class EmployeeEffects {

  constructor(private actions$: Actions, private router:Router) {}

  redirectToEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.addEmployee),
      tap((_) => this.router.navigate(['list']))
    ),
  ({ dispatch: false }));

}

