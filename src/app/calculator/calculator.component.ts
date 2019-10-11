import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CalcService} from '../service/calc.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})



@Injectable()
export class CalculatorComponent implements OnInit {


  constructor(private calcService: CalcService) {}
  expressionInput = new FormControl('');
  expressionOutput = new FormControl('');
  expressionValue = new FormControl('');

  ngOnInit() {
  }

  onCalculate() {
    this.calcService.calculate(this.expressionInput.value).subscribe(res => {
      this.expressionOutput.setValue(res.expression);
      this.expressionValue.setValue(res.value);
    });
  }

  onClear() {
    this.expressionInput.reset();
    this.expressionOutput.reset();
    this.expressionValue.reset();
  }
}
