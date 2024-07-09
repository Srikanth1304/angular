import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  getEmployees(): Employee[] {
    return [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 25 },
      { id: 3, name: 'Charlie', age: 28 },
      { id: 4, name: 'Diana', age: 35 },
      { id: 5, name: 'Edward', age: 40 }
    ];
  }
}
