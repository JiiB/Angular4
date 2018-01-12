import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from '../models/Book.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {
  private bookCollection: AngularFirestoreCollection<Book>;
  private books: Observable<Book[]>;
  constructor(public afs: AngularFirestore) {
    this.bookCollection = this.afs.collection('Books');
    this.books = this.bookCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Book;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getBooks() {
    return this.books;
  }

}
