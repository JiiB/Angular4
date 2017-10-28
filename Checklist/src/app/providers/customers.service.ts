import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomersService {
  customersCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;
  constructor(public afs: AngularFirestore, ) {
    // fetch data from "Customers" collection
    this.customers = this.afs.collection('Customers').valueChanges();
  }

  getCustomers() {
    return this.customers;
  }

}

