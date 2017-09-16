import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {MdSidenav} from '@angular/material';
import {database} from "firebase/app";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('start') sidenav: MdSidenav;

  user: Observable<firebase.User>;
  userInfo: any;
  items: FirebaseListObservable<any[]>;
  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.items = db.list('items');

    this.user.subscribe((auth) => {
      if(auth != null){
        console.log(auth);
      }
    });
  }

  ngAfterViewInit() {
    if (window.innerWidth <= 799) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  onResize($event) {
    if ($event.target.innerWidth <= 799) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

}
