import { Component, Inject } from '@angular/core';
import { Customer } from '../../../models/Customer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class AddCustomerDialogComponent {
  customer: Customer = {
    name: '',
    domain: '',
    date_created: 0
  };
  constructor(public DialogRef: MatDialogRef<AddCustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.customer = this.data.customer;
  }

  saveAddCustomer(state) {
    // TODO validate
    if (state) {
      this.DialogRef.close(this.customer);
    } else {
      this.DialogRef.close(false);
    }
  }

}
