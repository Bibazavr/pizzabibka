import './App.css';

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {Header} from '../Header';
import {Home} from '../Pages/Home';
import {Cart} from '../Pages/Cart';
import {SignUp} from '../Pages/SignUp';
import {SignIn} from '../Pages/SignIn';

function App(): React.ReactElement {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/sign_up" render={() => <SignUp />} />
        <Route path="/sign_in" render={() => <SignIn />} />
        <Route path="*">
          <Redirect to="/page-not-found" />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
