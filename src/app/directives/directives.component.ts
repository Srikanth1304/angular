import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
          <h3 *ngIf="displayName; else elseBlock"> 
            Angular 
          </h3>
          <ng-template #elseBlock>
             <h3>Name is hidden</h3>

          </ng-template>

          <div *ngIf="displayName; then ifblock; else elseblock"></div>
          <ng-template #ifblock>
            <h4>Angular</h4>
          </ng-template>

          <ng-template #elseblock>
            <h4>Hidden</h4>
          </ng-template>

          <input type="text" placeholder="swirch" [(ngModel)]="color" #mycolor>

          <div [ngSwitch]="mycolor.value">
            <div *ngSwitchCase="'blue'">you picked blue</div>
            <div *ngSwitchCase="'orange'">you picked orange</div>
            <div *ngSwitchCase="'red'">you picked red</div>
            <div *ngSwitchDefault>Try Again</div>
          </div>


          <div *ngFor="let color of colors; index as i ">
              <h5>{{i}} {{color}}</h5>
          <div>

  `,
  styles: []
})
export class DirectivesComponent {
  displayName=!true;
  public color="";
  public colors=["red","blue","yellow","orange","black","white","green"];
  constructor(){}

}
