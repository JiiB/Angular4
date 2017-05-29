import { Component, OnInit, OnDestroy } from "@angular/core";
import {ActivatedRoute, Params} from '@angular/router';

import {Subscription} from 'rxjs';


@Component({
  template: `
   home
   {{token}}
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  token: string;
  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.token = this.activatedRoute.snapshot.queryParams['token'];
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParams: Params,) => this.token = queryParams['token']
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
