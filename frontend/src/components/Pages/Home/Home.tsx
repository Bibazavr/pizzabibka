import React from 'react';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

import {Products} from './Products';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      left: 1000,
      overflow: 'auto',
    },
  })
);
export const Home = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Products />
    </div>
  );
};
