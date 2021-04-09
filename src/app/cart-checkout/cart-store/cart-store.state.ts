import {Injectable} from '@angular/core';
import {BookModel} from '../../core/models/book.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddItemToCart} from './cart-store.actions';


export interface CartStoreModel {
  cart: BookModel[];
}

@State<CartStoreModel>({
  name: 'cart',
  defaults: {
    cart: []
  }
})

@Injectable()
export class CartState {
// selectors
  @Selector()
  static selectCart(state: CartStoreModel): BookModel[] {
    return state.cart;
  }

  @Selector()
  static  selectCartItemsNumber(state: CartStoreModel): number {
    return state.cart.length;
  }

// actions
  @Action(AddItemToCart)
  addItemToCart({getState, patchState}: StateContext<CartStoreModel>, { payload }: AddItemToCart): void {
    const state = getState();
    patchState({
      ...state,
      cart: [...state.cart, payload]
    });
  }
}
