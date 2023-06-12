import { Injectable } from '@angular/core';
import { EmployeeInterface } from './employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: EmployeeInterface[] = [
    {
      employeeId: 1,
      employeeName: 'Jake Nackos',
      employeeDepartment: 'Electrical',
      employeeProfile: 'assets/employee/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'
    },
    {
      employeeId: 2,
      employeeName: 'Omid Armin',
      employeeDepartment: 'Electrical',
      employeeProfile: 'assets/employee/omid-armin-HtQLD6HOS94-unsplash.jpg'
    },
    {
      employeeId: 3,
      employeeName: 'Austin Wade',
      employeeDepartment: 'Mechanical',
      employeeProfile: 'assets/employee/austin-wade-X6Uj51n5CE8-unsplash.jpg'
    },
    {
      employeeId: 4,
      employeeName: 'Craig Mckay',
      employeeDepartment: 'Finance',
      employeeProfile: 'assets/employee/craig-mckay-jmURdhtm7Ng-unsplash.jpg'
    },
    {
      employeeId: 5,
      employeeName: 'Jimmy Fermin',
      employeeDepartment: 'Finance',
      employeeProfile: 'assets/employee/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg'
    },
    {
      employeeId: 6,
      employeeName: 'Kirill Balobanov',
      employeeDepartment: 'IT',
      employeeProfile: 'assets/employee/kirill-balobanov-sRPbVu7FOsw-unsplash.jpg'
    }
  ];

  constructor() { }

  getAllEmployee(): EmployeeInterface[] {
    return this.employeeList;
  }

  getEmployeeById(id: number): EmployeeInterface | undefined {
    return this.employeeList.find(employee => employee.employeeId === id);
  }
}
