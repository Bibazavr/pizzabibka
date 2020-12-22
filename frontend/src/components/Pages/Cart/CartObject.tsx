import React from 'react';
import {useDispatch} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import {makeStyles} from '@material-ui/core/styles';

import {Product} from '../../../types';
import {addToCart, removeFromCart} from '../../../redux/reducers/cart/actions';

interface CartObjectProps {
  product: Product;
  count: number;
}

const useStyles = makeStyles({
  root: {
    margin: 5,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  contentText: {
    flexGrow: 10,
  },
});
export const CartObject = (props: CartObjectProps): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <div>
          <CardMedia
            component="img"
            alt={props.product.title}
            height="100"
            width="100%"
            image={`/images/${props.product.image}`}
            title={props.product.title}
          />
        </div>
        <CardContent className={classes.contentText}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.product.ingredients}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.product.price}
        </Typography>

        <IconButton
          name={`${props.product.title} decrement`}
          onClick={() =>
            removeFromCart({id: props.product.title, count: 1}, dispatch)
          }
          size={'small'}
        >
          <RemoveIcon />
        </IconButton>
        <Typography>{props.count}</Typography>
        <IconButton
          name={`${props.product.title} increment`}
          onClick={() =>
            addToCart({id: props.product.title, count: 1}, dispatch)
          }
          size={'small'}
        >
          <AddIcon />
        </IconButton>

        <Typography variant="body2" color="textSecondary" component="p">
          {props.product.price * props.count}
        </Typography>

        <IconButton
          name={`${props.product.title} remove`}
          onClick={() =>
            removeFromCart(
              {id: props.product.title, count: props.count},
              dispatch
            )
          }
          size={'small'}
        >
          <ClearIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
