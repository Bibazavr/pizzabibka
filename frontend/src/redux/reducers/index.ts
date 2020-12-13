interface GlobalState {
  cart: [];
  products: [];
  authType: null;
}

type Action = {type: string; payload: Record<string, unknown>};

const initialState: GlobalState = {
  cart: [],
  products: [],
  authType: null,
};

export const reducer = (state = initialState, action: Action): GlobalState => {
  switch (action.type) {
    default:
      return state;
  }
};
