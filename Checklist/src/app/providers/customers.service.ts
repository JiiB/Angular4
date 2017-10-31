import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class CustomersService {
  customersCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;
  customerDoc: AngularFirestoreDocument<Customer>;
  constructor(public afs: AngularFirestore, public router: Router ) {

    this.customersCollection = this.afs.collection('Customers', ref => ref.orderBy('name', 'asc'));

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

  addCustomer(customer: Customer) {
    // TODO: find better solution to avoid, that the collections gets loaded again, afer a new customer is added to firestore.
    // quickfix: redirect after the promise resolves
    this.customersCollection.add(customer).then(res => (this.router.navigate(['/customers'])));
  }

  updateCustomer(customer: Customer) {
    this.customerDoc = this.afs.doc(`Customers/${customer.id}`);
    this.customerDoc.update(customer);
  }

  deleteCustomer(customer: Customer) {
    this.customerDoc = this.afs.doc(`Customers/${customer.id}`);
    this.customerDoc.delete();
  }

}

