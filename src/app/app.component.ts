import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData:any;
  public clickedEvent: string;
  title = `Weather's Call`;
  public message:string ='';
    childEventClicked(event: string) {
    this.clickedEvent = event;
  }
}
