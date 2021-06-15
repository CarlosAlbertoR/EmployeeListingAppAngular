import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-employees',
  templateUrl: './count-employees.component.html',
  styleUrls: ['./count-employees.component.scss']
})
export class CountEmployeesComponent implements OnInit {

  @Input() everyone: number;
  @Input() female: number;
  @Input() male: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSelected = 'Everyone';

  constructor() {
    this.everyone = 0;
    this.female = 0;
    this.male = 0;
  }

  ngOnInit(): void {
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSelected);
  }
}
