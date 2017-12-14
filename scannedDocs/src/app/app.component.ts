import { Component, OnInit } from '@angular/core';
import {ScannedDocsService} from './scanned-docs.service';
import {MatDialog, MatSnackBar} from '@angular/material';

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
  private documents;
  dialogResult = '';

  constructor(private _sdS: ScannedDocsService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.updateDOM();

  }
  updateDOM() {
    this._sdS.getDocs()
      .subscribe((resDocs) => {
        this.data = resDocs;
      });
  }

  ngOnInit() {

    this.detectUpdates();
    setInterval(() => {

      if (JSON.stringify(this.data) !== JSON.stringify(this.documents)) {
        console.log('something changed!');
        this.snackBar.open('Verzeichnis wurde aktualisiert', 'Ok!', {
          duration: 3500,
        });
        this.updateDOM();
        this.detectUpdates();
      }

      this.listItems();

      this.detectUpdates();
    }, 2000);
  }

  detectUpdates() {
    this._sdS.getDocs()
      .subscribe((resDocs) => {
        this.documents = resDocs;

      });
  }

  listItems() {
    console.log(JSON.stringify(this.data));
  }

  openDialog(filename) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '500px',
      data: filename.innerHTML
    });

    dialogRef.beforeClose().subscribe(result => {
      this.documents.length++;
      this.updateDOM();
      this.detectUpdates();
    });
  }


}
