import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  num1:number=0;
  num2:number=0;
  resul:number=0;

  sumar():void{
    this.resul=this.num1+this.num2;
  }
  restar():void{
    this.resul=this.num1-this.num2;
  }
  producto():void{
    this.resul=this.num1*this.num2;
  }
}
