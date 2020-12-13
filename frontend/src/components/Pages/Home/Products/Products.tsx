import React from 'react';

import {API} from '../../../../API';
import {WithAPI} from '../../../../context';
import {Product as ProductTypes} from '../../../../types';
import {Product} from './Product';
import {makeStyles} from '@material-ui/core/styles';

interface ProductsProps {
  API: API;
}
const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: 5,
    flexWrap: 'wrap',
    justifyContent: 'stretch',
    alignContent: 'center',
    flexDirection: 'row',
  },
});

const ProductsIMPL = (props: ProductsProps): React.ReactElement => {
  const classes = useStyles();

  const [products, setProducts] = React.useState<ProductTypes[]>([]);
  React.useEffect(() => {
    const loadProducts = async () => {
      const productsFromAPI = await props.API.loadProducts();
      console.log('productsFromAPI', productsFromAPI);
      setProducts(productsFromAPI.result);
    };
    loadProducts().then();
  }, []);
  return (
    <div className={classes.root}>
      {products
        .filter((prod) => prod.type === 'pizza')
        .map((prod, index) => {
          return <Product key={index} product={prod} />;
        })}
    </div>
  );
};

export const Products = WithAPI(ProductsIMPL);
