import { Component, Inject } from '@angular/core';
import { Customer } from '../../../models/Customer';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent {
  customer: Customer;
  constructor(public DialogRef: MatDialogRef<EditCustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.customer = this.data.customer;
  }
  saveEditCustomer() {
    this.DialogRef.close(this.customer);
  }

}
