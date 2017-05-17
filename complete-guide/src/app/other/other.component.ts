import { Component, ViewChild, ElementRef } from '@angular/core';

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
  aNumber = 999;
  attachClass = false;
  @ViewChild('input') input: ElementRef;


  constructor() {
    setTimeout(() => {
      this.aNumber += 1;
      this.attachClass = true;
      this.input.nativeElement.value = "hallo";
    }, 2000);

  }

  onClick(event: Event){
    console.log(event);
  }

}
