import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../../pages/home-page';
import SplitterPage from '../../../pages/splitter-page';
import ProtectedRoute from '../../atoms/protected-route';

const App = () => (
  <div className={'app'}>
    <Route path={'/'} component={HomePage} exact />
    <ProtectedRoute path={'/splitter'} component={SplitterPage} />
  </div>
);

export default App;
