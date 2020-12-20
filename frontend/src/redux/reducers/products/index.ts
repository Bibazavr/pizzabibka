import {ProductsActions, ProductsState} from './types';

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};

export const ProductsReducer = (
  state = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case 'SET_ERROR_PRODUCTS':
      return {
        ...state,
        error: action.error,
      };
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        data: action.data,
      };
    case 'SET_LOADING_PRODUCTS':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
