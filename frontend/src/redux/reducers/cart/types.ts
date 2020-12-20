export type AddToCartPayload = {id: string; count: number};

export interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: AddToCartPayload;
}

export interface ClearCart {
  type: 'CLEAR_CART';
}

export interface RemoveFromCart {
  type: 'REMOVE_FROM_CART';
  payload: AddToCartPayload;
}

export type CartActions = AddToCartAction | ClearCart | RemoveFromCart;

export type CartData = {
  [id: string]: number;
};

export interface CartState {
  count: number;
  data: CartData;
}
