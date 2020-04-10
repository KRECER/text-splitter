import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './redux/store';
import App from './components/molecules/app';

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <CssBaseline />
      <App />
    </Router>
  </Provider>,
  document.querySelector('.main')
);
