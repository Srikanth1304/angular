import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-fetc-http',
  templateUrl: './fetc-http.component.html',
  styleUrls: ['./fetc-http.component.css']
})
export class FetcHttpComponent implements OnInit {
  employee: any[] = [];

  constructor(private httpService: HttpServiceService) {}

  ngOnInit() {
    this.httpService.getEmployees().subscribe(data => this.employee = data);
  }
}
