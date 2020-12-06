import React from 'react';

import './App.css';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Header} from './Header';


function App(): React.ReactElement {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
