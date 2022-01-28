import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.any,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
  routeProps: PropTypes.string,
};

// export default function PublicRoute({
//   component: Component,
//   redirectTo,
//   children,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && routeProps.restricted;
//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }
