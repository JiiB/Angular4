import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../providers/customers.service';
import { Customer } from '../../models/Customer';
import { Router } from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = {
    name: '',
    domain: '',
    date_created: 0
  };
  constructor(private customerService: CustomersService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() { }

  onSubmit() {
    // TODO: add URL validation
    if (this.customer.name !== '' && this.customer.domain !== '') {
      this.customerService.addCustomer(this.customer);
      this.snackBar.open(`Der Kunde ${this.customer.name} wurde hinzugefügt!`);
    }

  }


}
