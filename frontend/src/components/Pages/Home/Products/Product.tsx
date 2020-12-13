import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Product as ProductTypes} from '../../../../types';

interface ProductProps {
  product: ProductTypes;
}

const useStyles = makeStyles({
  root: {
    margin: 5,
    flexBasis: 200,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  contentText: {
    flexGrow: 1,
  },
});

export const Product = (props: ProductProps): React.ReactElement => {
  const classes = useStyles();

  console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <CardMedia
          component="img"
          alt={props.product.title}
          height="220"
          width="100%"
          image={`/images/${props.product.image}`}
          title={props.product.title}
        />
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
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
