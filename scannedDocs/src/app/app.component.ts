import { Component, OnInit } from '@angular/core';
import {ScannedDocsService} from './scanned-docs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScannedDocsService]
})
export class AppComponent implements OnInit {
  title = 'app';
  data = [];

  constructor(private _sdS: ScannedDocsService){}
  ngOnInit(){
    this.detectUpdates();
    setInterval(() => {
      this.detectUpdates();
    }, 2000);
  }
    
  detectUpdates() {
    this._sdS.getDocs()
      .subscribe(resDocs => this.data = resDocs);
  }

  listItems(){
    console.log(this.data);
  }


}
