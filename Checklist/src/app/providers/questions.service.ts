import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/Question';
import { Category } from '../models/Category';

@Injectable()
export class QuestionsService {
  categoriesCollection: AngularFirestoreCollection<Category>;
  questionsCollection: AngularFirestoreCollection<Question>;
  Questions: Observable<Question[]>;
  categories: Observable<Category[]>;
  catNum: Category[];
  questionDoc: AngularFirestoreDocument<Question>;
  constructor(public afs: AngularFirestore ) {

    this.categoriesCollection = this.afs.collection('Categories', ref => ref.orderBy('name', 'asc'));

    this.categories = this.categoriesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Category;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    this.questionsCollection = this.afs.collection('Questions');
    this.Questions = this.questionsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Question;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getCategorys() {
    return this.categories;
  }
  getQuestions() {
    return this.Questions;
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
