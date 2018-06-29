import { Component } from '@angular/core';
 
@Component({
  selector: 'calc',
  templateUrl: 'calc.component.html',
  styleUrls: ['calc.component.css']
})
export class CalcComponent {
    public number1 : number;
    public number2 : number;
    public result : number;
 
    public suma(){
        this.result = this.number1 + this.number2
    }
    public resta(){
        this.result = this.number1 - this.number2
    }
    public multiplicacion(){
        this.result = this.number1 * this.number2
    }
    public division(){
        this.result = this.number1 / this.number2
    }
  }

