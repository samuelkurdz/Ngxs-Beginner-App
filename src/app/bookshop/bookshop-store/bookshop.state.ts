import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import { SetBooks } from './bookshop.actions';
import { BookModel } from '../../core/models/book.model';
import {Books} from '../books-data';

export interface BookshopStateModel {
  allBooks: BookModel[];
  categories: string[];
}

@State<BookshopStateModel>({
  name: 'bookshop',
  defaults: {
// @ts-ignore
    allBooks: undefined,
    categories: []
  }
})
@Injectable()
export class BookshopState {
  // selectors
  @Selector()
  static selectAllBooks(state: BookshopStateModel): BookModel[] {
    return state.allBooks;
  }

  // actions
  @Action(SetBooks)
  userLogin({getState, patchState }: StateContext<BookshopStateModel>): void {
    const state = getState();
    patchState({
      ...state,
      allBooks: Books
    });
  }

}
