import {API} from '../../../API';
import {ProductsActions} from './types';
import {Dispatch} from 'redux';

export const loadProducts = (
  API: API,
  dispatch: Dispatch<ProductsActions>
): void => {
  dispatch({type: 'SET_LOADING_PRODUCTS', loading: true});
  API.loadProducts()
    .then((r) => {
      dispatch({
        type: 'LOAD_PRODUCTS',
        data: r.result,
      });
      dispatch({type: 'SET_LOADING_PRODUCTS', loading: false});
    })
    .catch((e) => {
      dispatch({
        type: 'SET_ERROR_PRODUCTS',
        error: e,
      });
      dispatch({type: 'SET_LOADING_PRODUCTS', loading: false});
    });
};
