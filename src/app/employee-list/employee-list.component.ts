import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  template: `
          <ul *ngFor="let emp of employees">
            <li>{{emp.name}}</li>
          </ul>
  `,
  styleUrls: ['./employee-list.component.css']  
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[] = [];  // Explicitly define the type

  // Declaring dependency in the component
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
