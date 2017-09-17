import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable, Subject} from 'rxjs/rx';
import * as firebase from 'firebase/app';
import {AuthState} from './auth-state';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  static UNKNOWN_USER = new AuthState(null);
  authInfo$: BehaviorSubject<AuthState> = new BehaviorSubject<AuthState>(AuthService.UNKNOWN_USER);
  user: Observable<firebase.User>;
  userInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe(res => this.userInfo.next(res));
    this.userInfo.subscribe(res => console.log(res));
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // fromFirebaseAuthPromise(promise): Observable<any> {
  //   const subject = new Subject<any>();
  //
  //   promise
  //     .then(
  //       res => {
  //         const authInfo = new AuthState(this.userInfo.uid);
  //         this.authInfo$.next(authInfo);
  //         subject.next(res);
  //         subject.complete();
  //       },
  //       err => {
  //         this.authInfo$.error(err);
  //         subject.error(err);
  //         subject.complete();
  //       }
  //     );
  //
  //   return subject.asObservable();
  // }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
