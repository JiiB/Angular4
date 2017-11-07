import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from '../../providers/customers.service';
import { Customer } from '../../models/Customer';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Subscription } from 'rxjs/Subscription';
import { EditCustomerDialogComponent } from '../dialogs/edit-customer-dialog/edit-customer-dialog.component';
import { AddCustomerDialogComponent } from '../dialogs/add-customer-dialog/add-customer-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {
  customers: Customer[];
  private subscription: Subscription;
  constructor(private customerService: CustomersService, public dialog: MatDialog) {

    // alert("jklfasd");
  }

  ngOnInit() {
    this.subscription = this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // alert("left component");
  }

  // add Dialog
  openDialogAdd(customer: Customer): void {
    const dialogRef = this.dialog.open(AddCustomerDialogComponent, {
      width: '400px',
      data: {
        title: `Kunde hinzufügen`,
        customer: customer
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO: Validate the user input
      this.customerService.addCustomer(result);
    });
  }

  // Edit Dialog
  openDialogEdit(customer: Customer): void {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
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


  deleteCustomer(event, customer: Customer) {
    this.customerService.deleteCustomer(customer);
  }

}
