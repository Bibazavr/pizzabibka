import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroIcon from '@material-ui/icons/Euro';

import {AuthContextTypes, WithAuth} from '../../contexts/WithAuth';
import {GlobalState} from '../../redux/reducers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.background.default,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
    },
    menuButton: {
      color: '#fff',
      textDecoration: 'none',
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#fff',
      textDecoration: 'none',
    },
  })
);

interface HeaderProps {
  auth: AuthContextTypes;
}

const HeaderIMPL = (props: HeaderProps): React.ReactElement => {
  const classes = useStyles();
  const cart = useSelector((state: GlobalState) => {
    return state.cart;
  });

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.root}>
        <Link to={'/'} className={classes.title}>
          <IconButton
            name={'pizza'}
            edge="start"
            className={clsx([classes.title, classes.menuButton])}
            color="inherit"
            aria-label="menu"
          >
            <LocalPizzaIcon />
            <Typography variant="h6">Pizzabibka</Typography>
          </IconButton>
        </Link>

        <IconButton
          name={'currency'}
          color={'inherit'}
          aria-label="add an alarm"
        >
          {props.auth.user?.currency === 'euro' ? (
            <EuroIcon />
          ) : (
            <AttachMoneyIcon />
          )}
        </IconButton>

        <Link to={'/cart'} className={classes.menuButton}>
          <IconButton name={'cart'} color={'inherit'} aria-label="add an alarm">
            <Badge badgeContent={cart.count} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
        {props.auth.user === null ? (
          <>
            <Link to={'/sign_in'} className={classes.menuButton}>
              <Button color="inherit" name={'Sign in'}>
                Sign in
              </Button>
            </Link>
            <Link to={'/sign_up'} className={classes.menuButton}>
              <Button color="inherit" name={'Sign up'}>
                Sign up
              </Button>
            </Link>
          </>
        ) : (
          <Button
            name={'Log out'}
            onClick={() => props.auth.logout()}
            className={classes.menuButton}
          >
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export const Header = WithAuth(HeaderIMPL);
