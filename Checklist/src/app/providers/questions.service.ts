import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/Question';

@Injectable()
export class QuestionsService {
  questionsCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;
  questionDoc: AngularFirestoreDocument<Question>;
  constructor(public afs: AngularFirestore ) {

    this.questionsCollection = this.afs.collection('Questions');

    this.questions = this.questionsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Question;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getQuestions() {
    return this.questions;
  }

  // addCustomer(customer: Customer) {
  //   this.customersCollection.add(customer).then(res => (this.router.navigate(['/customers'])));
  // }

  // updateCustomer(customer: Customer) {
  //   this.customerDoc = this.afs.doc(`Customers/${customer.id}`);
  //   this.customerDoc.update(customer);
  // }

  // deleteCustomer(customer: Customer) {
  //   this.customerDoc = this.afs.doc(`Customers/${customer.id}`);
  //   this.customerDoc.delete();
  // }

}
