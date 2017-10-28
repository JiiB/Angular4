import {Component, ViewChild, OnInit} from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
import {MatSidenav} from '@angular/material';
import {AuthService} from './providers/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('start') sidenav: MatSidenav;


  constructor(private authService: AuthService) {

  }

  ngOnInit() {

  }

  onResize($event) {
    if ($event.target.innerWidth <= 799) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

}
