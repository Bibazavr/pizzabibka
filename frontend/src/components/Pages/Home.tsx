import React from 'react';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

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
export const Home = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Home</Typography>
      <Link to="/cart">
        <Typography>Go to Cart</Typography>
      </Link>
    </div>
  );
};
