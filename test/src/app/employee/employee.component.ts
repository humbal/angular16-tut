import { Component, Input, inject } from '@angular/core';
import { EmployeeInterface } from '../employee-interface';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employeeList: EmployeeInterface[] =  [];
  employeeService: EmployeeService = inject(EmployeeService);

  constructor() {
    this.employeeList = this.employeeService.getAllEmployee();
  }
}
