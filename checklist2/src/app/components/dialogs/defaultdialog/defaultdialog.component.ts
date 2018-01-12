import { Component, Inject } from '@angular/core';
import { Customer } from '../../../models/Customer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-defaultdialog',
  templateUrl: './defaultdialog.component.html',
  styleUrls: ['./defaultdialog.component.css']
})
export class DefaultdialogComponent {
  customer: Customer;
  constructor(public DialogRef: MatDialogRef<DefaultdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.customer = this.data.customer;
  }
  deleteCustomer() {
    this.DialogRef.close(true);
  }

}


