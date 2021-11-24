import { Employee } from "../interfaces/employee";

export class employeeModel implements Employee{
  firstName: string;
  surname: string;
  age: string;

constructor(firstName:string, surname:string, age:string){

  this.firstName=firstName;
  this.surname=surname;
  this.age=age;
}

}

