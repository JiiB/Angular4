import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [
    `
    .ng-touched.ng-invalid {
      border-color: red;
    }

    `
  ]
})
export class TemplateDrivenComponent implements OnInit {
  user = {
    username: "Max",
    email: "test@test.com",
    password: "pass"
  }
  constructor() { }

  ngOnInit() {

  }
  onSubmit(f) {
    console.log(f.value);
  }

}
