import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.css']
})
export class ComponentViewerComponent  {

  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase, private authService: AuthService) {
    this.items = db.list('/Domains');
    // this.items.push({url: 'youtube.ch', owner: 'Peter', checklist: true});
  }




}
