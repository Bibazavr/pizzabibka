import Cookies from 'cookies-js';

import {CartActions, CartState} from './types';
import {addToCartHelper, removeFromCartHelper} from './utils';

const initialState: CartState = Cookies.get('cart')
  ? JSON.parse(Cookies.get('cart'))
  : {
      data: {},
      count: 0,
    };

export const CartReducer = (
  state = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCartHelper(state, action.payload);
    case 'CLEAR_CART':
      return initialState;
    case 'REMOVE_FROM_CART':
      return removeFromCartHelper(state, action.payload);
    default:
      return state;
  }
};
