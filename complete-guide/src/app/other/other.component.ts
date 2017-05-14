import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styles: [`
    .red-border{
      border: 1px solid red;
    }
  `]
})

export class OtherComponent {

  aString = "Ich bin ein String";
  aNumber = 123;
  attachClass = false;

  constructor() {
    setTimeout(() => {
      this.aNumber += 1;
      this.attachClass = true;
    }, 2000);

  }

  onClick(event: Event){
    console.log(event);
  }

}
