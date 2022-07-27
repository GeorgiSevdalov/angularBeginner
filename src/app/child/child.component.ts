import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  text:string = "";

  constructor() { 
  }

  ngOnInit(): void {
    this.text = "text";
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }

}
