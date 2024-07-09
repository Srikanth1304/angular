import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h3>I am {{name}}</h3>
            <h5>{{2+3}}</h5>
            <h3>{{greet()}}</h3>
            <input id={{myId}} [disabled]="isDisabled" type="text" value="property binding with bool.false">
            <input id={{myId}} disabled="{{isDisabled}}" type="text" value="interpolation with bool.false"> 
            <br>
            <br>
            <h1 style="color:{{isActive ? 'green' : 'red'}}"  >Styling Not recomanded with interpolation, we dont have many options  </h1>

            <h3 [class]=className >class binding sucess/fail/special</h3>
            <h2 [class.sucess]="Classbool"> customize for true/false</h2>
            <h3 [style.color]="'grey'">Style binding</h3>
            <h4 [style.color]="isStyle ? 'green' : 'red' ">Style binding with boolean</h4>
            <h4 [style.color]="sayColor">Style binding </h4>
            <h4 [ngStyle]="styles">Style binding with combined </h4>
            <br>
            <br>
            <button (click)="onClick($event)">wish</button>
            {{greeting}}
            <button (click)="greeting1='welcome'">wish </button>
            {{greeting1}}
            <br>
            <br>
            <input #myval type="text">
            <button (click)="clicked(myval.value)">submit</button>
            <br>
            <br>
            <input [(ngModel)]="twoWayName" type="text">
            {{twoWayName}}

  `,         
  styles: [`
    /* #pass{
    color:blue;} */
    .sucess{
    color:green;
    }
    .fail{
    color:red;}

    .special{
    font:italic;}
    `]
})
export class TestComponent {
  public twoWayName="";
  public name="Srikanth";
  public myId="miracle";
  public isDisabled=false;
  isActive=false;
  className="sucess"
  Classbool=true;

  isStyle=!true;
  sayColor="blue";
  styles={
    color:"brown",
    fontStyle:"italic"

  }

  public greeting =""
  public greeting1=""
  onClick(event: any){
    console.log("Welcome"+" "+this.name);
    console.log(event);
    this.greeting="Welcome"+" "+this.name;
  }

  clicked(val:any){
    console.log(val)
  }


  greet(){
    return "Hello"+" "+this.name;
  }

}
