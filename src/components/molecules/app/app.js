import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '@/pages/home-page';
import LayoutPage from '@/pages/layout-page';
import ProtectedRoute from '@/components/atoms/protected-route';

const App = () => (
  <div className={'app'}>
    <Route path={'/'} component={HomePage} exact />
    <ProtectedRoute path={'/layout'} component={LayoutPage} />
  </div>
);

export default App;
