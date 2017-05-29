import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import {Subscription} from 'rxjs';


@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Dein Account</h2>
        <button (click)="onNavigate()">zur startseite</button>
      </div>
      <p>{{id}}</p>
    </div>  
  `
})
export class UserComponent {
  id:string;
  private subscription: Subscription;
constructor(private router: Router, private acitvatedRoute: ActivatedRoute){

}
onNavigate() {
  this.router.navigate(['/'], {queryParams: {'token': 100}});
}
ngOnInit() {
// this.id = this.acitvatedRoute.snapshot.params['id'];
this.subscription = this.acitvatedRoute.params.subscribe(
  (params: Params) => {
    this.id = params['id'];
  }
);
}

OnDestroy(){
  this.subscription.unsubscribe();
}

}
