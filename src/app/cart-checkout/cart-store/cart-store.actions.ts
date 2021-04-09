import {BookModel} from '../../core/models/book.model';

export class AddItemToCart {
  static readonly type = '[CART] Add Item To Cart';

  constructor(public payload: BookModel) {
  }
}
