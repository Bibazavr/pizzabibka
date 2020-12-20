import {Dispatch} from 'redux';
import {AddToCartPayload, CartActions} from './types';

export const addToCart = (
  payload: AddToCartPayload,
  dispatch: Dispatch<CartActions>
): void => {
  dispatch({type: 'ADD_TO_CART', payload: payload});
};

export const removeFromCart = (
  payload: AddToCartPayload,
  dispatch: Dispatch<CartActions>
): void => {
  dispatch({type: 'REMOVE_FROM_CART', payload: payload});
};
