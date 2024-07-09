import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template:`
          <ul *ngFor="let emp of employees">
          <li> {{emp.id}}-{{emp.name}}-{{emp.age}} </li>
          </ul>
  `,
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public employees:Employee []=[];

  constructor(private _employeeService: EmployeeService){}
  ngOnInit(){
    this.employees=this._employeeService.getEmployees()
  }

}
