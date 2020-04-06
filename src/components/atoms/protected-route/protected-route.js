import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { getIsFilledText } from '../../../redux/selectors';

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isFilledText = useSelector(getIsFilledText);
  const location = useLocation();

  return (
    <Route {...rest}>
      {isFilledText ? <Component /> : <Redirect to={{ pathname: '/', state: { from: location.pathname } }} />}
    </Route>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
