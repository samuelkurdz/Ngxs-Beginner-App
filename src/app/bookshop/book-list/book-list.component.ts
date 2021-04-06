import { Component, OnInit } from '@angular/core';
import {Books} from '../books-data';
import {BookModel} from '../../core/models/book.model';

@Component({
  selector: 'ngx-start-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: BookModel[] = Books;
  constructor() { }

  ngOnInit(): void {
  }

}
