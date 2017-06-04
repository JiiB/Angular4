import { Component, OnInit, OnDestroy } from "@angular/core";
import {ActivatedRoute, Params} from '@angular/router';

import {Subscription} from 'rxjs';


@Component({
  template: `
   home
   {{token}} {{fragment}}
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
   private subscriptionFragment: Subscription;
  token: string;
  fragment: string;
  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.token = this.activatedRoute.snapshot.queryParams['token'];
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParams: Params,) => this.token = queryParams['token']
    );
    this.subscriptionFragment = this.activatedRoute.fragment.subscribe(
      fragment => this.fragment = fragment
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionFragment.unsubscribe();
  }

}
