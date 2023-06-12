import { Component, Input } from '@angular/core';
import { EmployeeInterface } from '../employee-interface';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee!: EmployeeInterface;
}
