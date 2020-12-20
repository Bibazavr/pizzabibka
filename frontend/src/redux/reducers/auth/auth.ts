import {AuthActions, UPDATE} from './authActions';

interface AuthState {
  authType: null | string;
}

export const initialState = {
  authType: null,
};

export const auth = (
  state: AuthState = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
};
