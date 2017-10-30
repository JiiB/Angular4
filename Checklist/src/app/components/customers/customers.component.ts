import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../providers/customers.service';
import { Customer } from '../../models/Customer';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomersService, public dialog: MatDialog) {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  ngOnInit() {
    // this.customerService.getCustomers().subscribe(customers => {
    //   this.customers = customers;
    // });
  }

  // Delete Dialog
  openDialogDelete(customer: Customer): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        title: `${customer.domain} Löschen?`,
        customer_edit: false,
        content: `Bist du sicher? Der Kunde '${customer.name}' und die dazugehörige Checkliste wird gelöscht?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
      if (result === true) {
        this.customerService.deleteCustomer(customer);
      }
    });
  }
  // Edit Dialog
  openDialogEdit(customer: Customer): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        title: `Kunde bearbeiten`,
        customer_edit: true,
        customer: customer
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // TODO: Validate the user input
        this.customerService.updateCustomer(customer);
    });
  }

  deleteCustomer(event, customer: Customer) {
    this.customerService.deleteCustomer(customer);
  }

}
