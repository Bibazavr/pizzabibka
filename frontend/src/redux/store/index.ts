import Cookies from 'cookies-js';
import {createStore} from 'redux';

import {reducer} from '../reducers';

export const store = createStore(reducer);

store.subscribe(() => {
  const {cart} = store.getState();
  Cookies.set('cart', JSON.stringify(cart));
});
