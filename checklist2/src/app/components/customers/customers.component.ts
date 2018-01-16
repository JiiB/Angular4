import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from '../../providers/customers.service';
import { Customer } from '../../models/Customer';
import { MatDialog } from '@angular/material';
// import { DialogComponent } from '../dialog/dialog.component';
import { Subscription } from 'rxjs/Subscription';
import { EditCustomerDialogComponent } from '../dialogs/edit-customer-dialog/edit-customer-dialog.component';
import { AddCustomerDialogComponent } from '../dialogs/add-customer-dialog/add-customer-dialog.component';
import { DefaultdialogComponent } from '../dialogs/defaultdialog/defaultdialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {
  customers: Customer[];
  private subscription: Subscription[] = [];
  constructor(private customerService: CustomersService, public dialog: MatDialog) {

    // alert("jklfasd");
  }

  ngOnInit() {
    this.subscription.push(this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
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

    this.subscription.push(dialogRef.afterClosed().subscribe(result => {
      // TODO: Validate the user input
      if (result === false || result === undefined) {
        // TODO: set the value back to inital state, if the chages do not get saved
      } else {
        this.customerService.addCustomer(result);
      }
    }));
  }

  // Edit Dialog
  openDialogEdit(customer: Customer, i): void {
    const prevInfo = Object.assign({}, customer); 
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      width: '400px',
      data: {
        title: `Kunde bearbeiten`,
        customer_edit: true,
        customer: customer
      }
    });

    this.subscription.push(dialogRef.afterClosed().subscribe(result => {
      // TODO: Validate the user input
      if (result === false || result === undefined) {
        // TODO: set the value back to inital state, if the chages do not get saved
        customer.name = prevInfo.name;
        customer.domain = prevInfo.domain;
      } else {
        this.customerService.updateCustomer(customer, prevInfo);
      }
    }));
  }

  // Delete Dialog
  openDialogDelete(customer: Customer): void {
    const dialogRef = this.dialog.open(DefaultdialogComponent, {
      width: '400px',
      data: {
        title: `${customer.domain} Löschen?`,
        content: `Bist du sicher? Der Kunde '${customer.name}' und die dazugehörige Checkliste wird gelöscht?`
      }
    });

    this.subscription.push(dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
      if (result === true) {
        this.customerService.deleteCustomer(customer);
      }
    }));
  }


  deleteCustomer(event, customer: Customer) {
    this.customerService.deleteCustomer(customer);
  }

}
