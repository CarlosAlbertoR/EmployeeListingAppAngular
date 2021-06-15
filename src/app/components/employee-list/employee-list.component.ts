import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [
    { id: 1, firstName: 'Sam', lastName: 'Otto', sex: 'Male', salary: 2332.34 },
    { id: 2, firstName: 'Mark', lastName: 'White', sex: 'Male', salary: 5423.34 },
    { id: 3, firstName: 'Mary', lastName: 'Jackson', sex: 'Female', salary: 3982.76 },
    { id: 4, firstName: 'Valery', lastName: 'Potman', sex: 'Female', salary: 8756.67 },
    { id: 5, firstName: 'Johan', lastName: 'Vasco', sex: 'Male', salary: 6390.07 }
  ]

  radioButtonSelected = 'Everyone';

  constructor() { }

  ngOnInit(): void {
  }

  getTotalEmployees(): number {
    return this.employeeList.length;
  }

  getTotalFemale(): number {
    return this.employeeList.filter(list => list.sex === 'Female').length;
  }

  getTotalMale(): number {
    return this.employeeList.filter(list => list.sex === 'Male').length;
  }
}
