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
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

interface ProductProps {
  product: ProductTypes;
  onAdd: (count: number) => void;
}

const useStyles = makeStyles({
  root: {
    margin: 5,
    maxWidth: 220,
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
  const [count, setCount] = React.useState(1);

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

        <IconButton
          onClick={() => setCount(count - 1)}
          disabled={count === 1}
          size={'small'}
        >
          <RemoveIcon />
        </IconButton>
        <Typography>{count}</Typography>
        <IconButton onClick={() => setCount(count + 1)} size={'small'}>
          <AddIcon />
        </IconButton>

        <Button size="small" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
