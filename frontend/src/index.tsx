import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {ErrorBoundary} from './components/ErrorBoundary';
import {store} from './redux/store';
import {APIContext} from './contexts/WithAPI/WithAPI';
import {API} from './API';
import {Auth} from './contexts/WithAuth';

ReactDOM.render(
  <React.StrictMode>
    <APIContext.Provider value={new API()}>
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary>
            <Auth>
              <App />
            </Auth>
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </APIContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
