import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private _url: string = "/assets/data/employee.json"; // Corrected URL

  constructor(private http: HttpClient) {} // Corrected type

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url); // Corrected URL
  }
}
