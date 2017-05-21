import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  color = 'red';
  elemente = ["hans", "peter", "jasmine", "rudolf", "klaus"];
  value = 100;


constructor(){
  setTimeout(() => {
    this.color = 'green';
  }, 3000);
}

}
