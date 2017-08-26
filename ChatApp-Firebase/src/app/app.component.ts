import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
// import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  userInfo: any;
  domain: string;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
    this.user.subscribe((auth) => {
      if(auth != null){
        this.userInfo = auth;
        var email = auth.email;
        this.domain = email.split("@")[1];
      }
    });

  }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }


  Send(desc: string) {
    if (desc.trim() != "") {
      this.items.push({ message: desc, date: new Date().toString().substring(3, 24), user: this.userInfo.displayName, photo: this.userInfo.photoURL });
      this.msgVal = '';
      console.log(this.userInfo.displayName);
    }
  }

}
