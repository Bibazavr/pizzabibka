import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import {AuthContextTypes, WithAuth} from '../../contexts/WithAuth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.background.default,
    },
    menuButton: {
      color: '#fff',
      marginRight: theme.spacing(2),
      textDecoration: 'none',
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Header = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={'/'} className={classes.menuButton}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <LocalPizzaIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Pizzabibka
          </Typography>
          <IconButton color={'inherit'} aria-label="add an alarm">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Link to={'/sign_in'} className={classes.menuButton}>
            <Button color="inherit">Sign in</Button>
          </Link>
          <Link to={'/sign_up'} className={classes.menuButton}>
            <Button color="inherit">Sign up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
