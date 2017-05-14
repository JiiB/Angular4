import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Inline Template</h1>
  <hr>
  <app-other></app-other>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'app works!';
  name = 'Nino Zumstein';


  constructor(){

  }


}
