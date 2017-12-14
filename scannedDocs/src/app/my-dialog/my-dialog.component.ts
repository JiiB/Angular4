import { Component, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css'],
  providers: [HttpService]
})
export class MyDialogComponent {
error: string;
  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private httpService: HttpService) { }

  onConfirm(newDocName, oldDocName) {
    // this.dialogRef.close(newDocName.value);
    this.httpService.sendData({oldname: oldDocName.value, newname: newDocName.value})
    .subscribe(
      result => {
        const statusMsg = result.text();
        console.log(result);
        if (statusMsg === 'error'){
          this.error = 'Bitte prüfe deine Eingabe!';
        } else {
          this.dialogRef.close();
        }

      },
      error => console.log(error));
  }

}
