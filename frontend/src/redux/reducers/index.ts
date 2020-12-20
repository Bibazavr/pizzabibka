import {combineReducers} from 'redux';

interface GlobalState {
  cart: [];
  products: [];
}

type Action = {type: string; payload: Record<string, unknown>};

const initialState: GlobalState = {
  cart: [],
  products: [],
};

export const reducer = (state = initialState, action: Action): GlobalState => {
  switch (action.type) {
    default:
      return state;
  }
};

export const reducers = combineReducers(reducer);
