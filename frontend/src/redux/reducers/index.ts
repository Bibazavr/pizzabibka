import {combineReducers} from 'redux';
import {ProductsReducer} from './products';
import {ProductsState} from './products/types';
import {CartReducer} from './cart';
import {CartState} from './cart/types';

export const reducers = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});

export interface GlobalState {
  cart: CartState;
  products: ProductsState;
}
