import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello";
  getMin(a:any, b:any) {
    if (a < b) {
      return a;
    }
    return b;
  }

  todaysDate = new Date();
}
