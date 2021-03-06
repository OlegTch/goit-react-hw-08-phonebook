import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
      {/* {isLoggedIn ? children : <Redirect to="/login" />} */}
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
  redirectTo: PropTypes.string,
  routeProps: PropTypes.string,
};
