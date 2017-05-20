import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Inline Template</h1>
  <hr>
  <app-other></app-other>
  <app-lifecycle [name]="name" *ngIf="attach"></app-lifecycle>
  <hr>
  <button (click)="name = 'Anna'">Name ändern</button>
  <button (click)="attach = false ">Zerstören</button>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'app works!';
  name = 'Nino Zumstein';
  attach = true;


  constructor() {

  }


}
