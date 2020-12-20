import Cookies from 'cookies-js';
import {createStore} from 'redux';

import {reducers} from '../reducers';

export const store = createStore(reducers);

store.subscribe(() => {
  const {cart} = store.getState();
  Cookies.set('cart', JSON.stringify(cart));
});
