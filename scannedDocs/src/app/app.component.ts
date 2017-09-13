import { Component, OnInit } from '@angular/core';
import {ScannedDocsService} from './scanned-docs.service';
import {MdDialog} from '@angular/material';

import { MyDialogComponent} from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScannedDocsService]
})
export class AppComponent implements OnInit {
  title = 'app';
  data = [];
  dialogResult = "";

  constructor(private _sdS: ScannedDocsService, public dialog: MdDialog){}
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

  openDialog(filename){
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '500px',
      data: filename.innerHTML
    });

    dialogRef.beforeClose().subscribe(result => {
      this.detectUpdates();
    });
  }


}
