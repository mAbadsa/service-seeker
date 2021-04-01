import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME_PAGE } from '../../Utils/routes.constant';
import { AuthContext } from '../../Context/Authentication';

const LoggedOutRoutes = ({ component, ...otherProps }) => {
  const { isAuth, authLoading } = useContext(AuthContext);

  if (!authLoading && !isAuth) {
    return <Route {...otherProps} component={component} />;
  }
  return <Redirect to={HOME_PAGE} />;
};

LoggedOutRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoggedOutRoutes;
