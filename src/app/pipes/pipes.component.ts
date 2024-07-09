import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
          <h2>{{name|uppercase}}</h2>
          <h2>{{name|lowercase}}</h2>
          <h2 class="tit" >{{title|titlecase}}</h2>
          <h2 [style.color]="'orange'">{{name|slice:3:9}}</h2>
          <h3>{{person|json}}
<br><br>
          <h4>{{5.537 | number:"1.2-3"}}
          <h4>{{5.537 | number:"2.4-10"}}
          <h4>{{5.537 | number:"6.2-3"}}

<br><br>
 
          <h4>{{0.9 | percent}}</h4>
<br><br>
          <h4>{{25|currency}}</h4>
          <h4>{{25|currency:"INR"}}</h4>
          <h4>{{25|currency:"INR":"code"}}</h4>
<br><br>
          <h4>{{date}}</h4>
          <h4>{{date| date:'short'}}</h4>
          <h4>{{date| date:'shortTime'}}</h4>      
          <h4>{{date| date:'shortDate'}}</h4>       

  `,
  styles: [`
    
    .tit{
    color:yellow;
    }
    `]
})
export class PipesComponent {
  public name="Srikanth";
  public title="welcome tO aNGULAR";
  public person={
    name:"sri",
    age:22
  }
  public date: any=new Date();

}
