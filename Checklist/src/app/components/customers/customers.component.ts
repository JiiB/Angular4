import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../providers/customers.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers: Customer[];
  constructor(private customerService: CustomersService) {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
   }

  ngOnInit() {
    // this.customerService.getCustomers().subscribe(customers => {
    //   this.customers = customers;
    // });
  }

}
