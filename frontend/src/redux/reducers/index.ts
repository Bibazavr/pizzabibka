import {combineReducers} from 'redux';
import {ProductsReducer} from './products';
import {ProductsState} from './products/types';

interface CartState {
  cart: [];
}

type Action = {type: string; payload: Record<string, unknown>};

const initialState: CartState = {
  cart: [],
};

const CartReducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    default:
      return state;
  }
};

export const reducers = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});

export interface GlobalState {
  cart: CartState;
  products: ProductsState;
}
