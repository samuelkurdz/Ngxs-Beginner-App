import { Component, OnInit } from '@angular/core';

import {BookModel} from '../../core/models/book.model';

import {Select, Store} from '@ngxs/store';
import {BookshopState} from '../bookshop-store/bookshop.state';
import {SetBooks} from '../bookshop-store/bookshop.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-start-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Select(BookshopState.selectAllBooks) books$: Observable<BookModel[]> | undefined;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SetBooks());
  }

}
