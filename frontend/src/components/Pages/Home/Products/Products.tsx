import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {API} from '../../../../API';
import {WithAPI} from '../../../../contexts/WithAPI';
import {Product as ProductTypes} from '../../../../types';
import {Product} from './Product';

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
});

const ProductsIMPL = (props: ProductsProps): React.ReactElement => {
  const classes = useStyles();

  const [products, setProducts] = React.useState<ProductTypes[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    const loadProducts = async () => {
      const productsFromAPI = await props.API.loadProducts();
      if (productsFromAPI.error) {
        return setError('Something went wrong. Can`t get Products:c');
      }
      setProducts(productsFromAPI.result);
    };
    loadProducts().then();
  }, []);
  return (
    <div className={classes.root}>
      {error && <Typography>{error}</Typography>}
      {products
        ?.filter((prod) => prod.type === 'pizza')
        .map((prod, index) => {
          return <Product key={index} product={prod} />;
        })}
    </div>
  );
};

export const Products = WithAPI(ProductsIMPL);
