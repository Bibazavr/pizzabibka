import {remove, set} from 'immutable';

import {AddToCartPayload, CartState} from './types';

export const addToCartHelper = (
  state: CartState,
  newData: AddToCartPayload
): CartState => {
  return {
    ...state,
    count: state.count + newData.count,
    data: set(
      state.data,
      newData.id,
      (state.data[newData.id] ?? 0) + newData.count
    ),
  };
};
export const removeFromCartHelper = (
  state: CartState,
  newData: AddToCartPayload
): CartState => {
  const productCount = state.data[newData.id];
  const decrement = productCount - newData.count;
  return {
    ...state,
    count: state.count - newData.count,
    data:
      decrement > 0
        ? set(state.data, newData.id, decrement)
        : remove(state.data, newData.id),
  };
};
