import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomersService {
  customersCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;
  constructor(public afs: AngularFirestore, ) {

    this.customersCollection = this.afs.collection('Customers');

    // fetch data from "Customers" collection
    // this.customers = this.afs.collection('Customers').valueChanges();
    this.customers = this.customersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Customer;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer: Customer){
    this.customersCollection.add(customer);
  }

}

