import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import {API} from '../../../../API';
import {WithAPI} from '../../../../contexts/WithAPI';
import {Product} from './Product';
import {GlobalState} from '../../../../redux/reducers';
import {loadProducts} from '../../../../redux/reducers/products/actions';

interface ProductsProps {
  API: API;
}
const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  loader: {
    width: '100%',
  },
});

const ProductsIMPL = (props: ProductsProps): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const products = useSelector((state: GlobalState) => {
    return state.products;
  });

  useEffect(() => {
    if (products.data.length === 0) {
      loadProducts(props.API, dispatch);
    }
  }, []);

  return (
    <div className={classes.root}>
      {products.error && <Typography>{products.error}</Typography>}
      {products.loading && <LinearProgress className={classes.loader} />}
      {products.data
        ?.filter((prod) => prod.type === 'pizza')
        .map((prod, index) => {
          return <Product key={index} product={prod} />;
        })}
    </div>
  );
};

export const Products = WithAPI(ProductsIMPL);
