import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];

 
  count: number = 0;

  IncrementEvent() {
        this.count++;
    }
    DecrementEvent() {
        this.count--;
    }
}
