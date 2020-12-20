import {Product} from '../../../types';

export interface ProductsState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

export interface SetLoadingProductsAction {
  type: 'SET_LOADING_PRODUCTS';
  loading: boolean;
}

export interface LoadProductsAction {
  type: 'LOAD_PRODUCTS';
  data: Product[];
}

export interface SetErrorAction {
  type: 'SET_ERROR_PRODUCTS';
  error: null | string;
}

export type ProductsActions =
  | SetLoadingProductsAction
  | LoadProductsAction
  | SetErrorAction;
