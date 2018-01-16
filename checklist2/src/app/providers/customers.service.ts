import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CustomersService {
  customersCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;
  // Test for stateChanges()
  customer: Observable<Customer>;
  customerDoc: AngularFirestoreDocument<Customer>;
  constructor(public afs: AngularFirestore, public router: Router, public snackBar: MatSnackBar) {

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

    // ----

    // this.customer
  }

  getCustomers() {
    return this.customers;
  }

  getCustomer(id) {
    return this.afs.doc(`Customers/${id}`).valueChanges();
  }

  addCustomer(customer: Customer) {
    // TODO: find better solution to avoid, that the collections gets loaded again, afer a new customer is added to firestore.
    // quickfix: redirect after the promise resolves
    this.customersCollection.add(customer).then(() => {
      this.snackBar.open(`Der Kunde ${customer.name} wurde hinzugefügt!`, '', {
        duration: 2500
      });
    });
    // this.customersCollection.add(customer).then(res => (this.router.navigate(['/customers'])));
  }

  updateCustomer(customer: Customer, prevInfo: Customer) {
    this.customerDoc = this.afs.doc(`Customers/${customer.id}`);
    this.customerDoc.update(customer).then(() => {
      this.snackBar.open(`Der Kunde ${prevInfo.name} wurde bearbeitet!`, '', {
        duration: 2500
      });
    });
  }

  deleteCustomer(customer: Customer) {
    this.customerDoc = this.afs.doc(`Customers/${customer.id}`);
    this.customerDoc.delete().then(() => {
      this.snackBar.open(`Der Kunde ${customer.name} wurde gelöscht!`, '', {
        duration: 2500
      });
    });
  }

}

