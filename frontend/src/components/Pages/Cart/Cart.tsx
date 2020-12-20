import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {GlobalState} from '../../../redux/reducers';
import {CartObject} from './CartObject';
import {loadProducts} from '../../../redux/reducers/products/actions';
import {API} from '../../../API';
import {WithAPI} from '../../../contexts/WithAPI';
import {Product} from '../../../types';
import {CartState} from '../../../redux/reducers/cart/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    totalPrice: {
      margin: 5,
    },
  })
);

export interface CartProps {
  API: API;
}
const CartIMPL = (props: CartProps): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state: GlobalState) => {
    return state.cart;
  });
  const products = useSelector((state: GlobalState) => {
    return state.products;
  });

  useEffect(() => {
    if (products.data.length === 0) {
      loadProducts(props.API, dispatch);
    }
  }, []);

  const totalPrice = React.useCallback(() => {
    return totalPriceCalculate(products.data, cart);
  }, [products, cart]);
  return (
    <div className={classes.root}>
      {Object.keys(cart.data).map((title, index) => {
        const product = products.data.find((prod) => prod.title === title);
        if (!product) return;
        return (
          <CartObject key={index} product={product} count={cart.data[title]} />
        );
      })}
      <Typography
        className={classes.totalPrice}
        align={'right'}
        variant="h5"
        component="h2"
      >
        Total price: {totalPrice()}
      </Typography>
    </div>
  );
};
export const Cart = WithAPI(CartIMPL);

export const totalPriceCalculate = (
  products: Product[],
  cart: CartState
): string => {
  let total = 0;
  Object.keys(cart.data).map((title, index) => {
    const product = products.find((prod) => prod.title === title);
    if (!product) return;
    total = total + product.price * cart.data[title];
  });
  return total.toFixed(2);
};
