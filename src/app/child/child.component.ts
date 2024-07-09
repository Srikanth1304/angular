import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>{{ "hello " + parentData }}</h2>
    <button (click)="fireEvent()">Send to parent</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter<string>();

  public fireEvent() {
    this.childEvent.emit("Hey Srikanth");
  }
}
