import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  evaluatedValue: string = '  ';
  constructor() { }

  ngOnInit() {
  }

  actForButtonChanged(arg){
    this.evaluatedValue += arg;
  }

  actevaluatePressed(arg){
    this.evaluatedValue = eval(this.evaluatedValue);
  }

  actForClear(){
    this.evaluatedValue = '';
  }

}
