import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { employeeReducer } from './reducers/employee.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './effects/employee.effects';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
   //StoreModule.forFeature('employee reducer', employeeReducer),
    StoreModule.forRoot({NgRx:employeeReducer}),
    EffectsModule.forRoot([EmployeeEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
