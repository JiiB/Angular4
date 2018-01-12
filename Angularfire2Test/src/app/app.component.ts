import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from './models/Book.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public books: Book[];

  constructor(public bs: BookService) { }

  ngOnInit() {
    this.bs.getBooks().subscribe(res => {
      this.books = res;
    });
  }
}
