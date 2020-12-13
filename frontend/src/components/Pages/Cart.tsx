import React from 'react';
import {Link} from 'react-router-dom';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
export const Cart = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Cart</Typography>
      <Link to="/">Go to home</Link>
    </div>
  );
};
