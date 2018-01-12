import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ChecklistService {

  customerDoc: AngularFirestoreDocument<Customer>;
  constructor(public afs: AngularFirestore) {
   }

   syncAnswers(customer: Customer) {
    this.customerDoc = this.afs.doc(`Customers/${customer.id}`);
    this.customerDoc.update(customer).then(() => {
      console.log('added');
    });
   }

}
